import { parentPort, workerData } from 'worker_threads';
import iThreadsDistribution from '../../interfaces/iThreadsDistribution';
import UrlBuilder from '../../tools/UrlBuilder';
import downloadContent from './downloadContent';


if (parentPort) {
  const { dt, keyword }: { dt: iThreadsDistribution, keyword: string } = workerData

  parentPort.postMessage(`I'll be working from page ${dt.start} to ${dt.end}`);

  // parentPort.postMessage(`Downloading: ${UrlBuilder.porVirUrlPerPage(keyword, i)}`);

  for (let i = dt.start; i <= dt.end; i++) {
    downloadContent(UrlBuilder.porVirUrlPerPage(keyword, i));
  }
}
