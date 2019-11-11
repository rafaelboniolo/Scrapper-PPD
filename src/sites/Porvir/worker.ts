import { parentPort, workerData } from 'worker_threads';
import iThreadsDistribution from '../../interfaces/iThreadsDistribution';

if (parentPort) {
  const { dt }: { dt: iThreadsDistribution } = workerData

  parentPort.postMessage(`I'll be working from page ${dt.start} to ${dt.end}`);
}
