import { isMainThread, Worker } from 'worker_threads';

import distributeThreads from './distributeThreads';

export default function (
  pages: number,
  keyword: string,
  WorkerPath: string
): void {
  if (isMainThread) {
    const distribution = distributeThreads(pages);

    distribution.map(dt => {
      const worker = new Worker(
        __dirname + '/worker.import.js',
        {
          workerData: {
            dt,
            keyword,
            path: WorkerPath
          }
        }
      )

      worker.on("error", (...args) => console.log(...args));
      worker.on("online", () => console.log(`Worker [${worker.threadId}] is up & running!`));
      worker.on("message", (result) => console.log(`Worker [${worker.threadId}] posted a message: ${result}`))
      worker.on("exit", (exitCode) => console.log(`Worker exited: ${exitCode}`));
    })
  }
}
