import { resolve } from 'path';
import { isMainThread, Worker } from 'worker_threads';

import distributeThreads from './distributeThreads';

const PORVIR_WORKER_PATH = resolve(__dirname, "..", "sites", "Porvir", "worker.ts");

export default function (pages: number) {
  if (isMainThread) {
    const distribution = distributeThreads(pages);

    distribution.map(dt => {
      const worker = new Worker(
        __dirname + '/worker.import.js',
        {
          workerData: {
            dt,
            path: PORVIR_WORKER_PATH
          }
        }
      )

      worker.on("error", (...args) => console.log(...args));
      worker.on("online", () => console.log(`Worker [${worker.threadId}] is up & running!`));
      worker.on("message", (result) => console.log(`Worker [${worker.threadId}] posted a message: ${result}`))
    })
  }
}
