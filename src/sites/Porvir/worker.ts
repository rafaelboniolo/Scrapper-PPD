import { parentPort, workerData } from 'worker_threads';
import configDatatabase from '../../config/database';
import iThreadsDistribution from '../../interfaces/iThreadsDistribution';
import Persistence from "../../tools/Persistence";
import UrlBuilder from '../../tools/UrlBuilder';
import downloadContent from './downloadContent';
import searchResult from './searchResult';


const main = async () => {
  if (parentPort) {
    const { dt, keyword }: { dt: iThreadsDistribution, keyword: string } = workerData

    parentPort.postMessage(`I'll be working from page ${dt.start} to ${dt.end}`);

    console.time("Worker::DownloadTime");
    for (let i = dt.start; i <= dt.end; i++) {
      const url = UrlBuilder.porVirUrlPerPage(keyword, i);
      parentPort.postMessage(`downloading :: ${url}`);
      const loadedInstance = await downloadContent(url);
      const pageContent = await searchResult(loadedInstance);
      parentPort.postMessage(`Page ${i} – found: ${pageContent.length}`);
      await Persistence.bulkSave(pageContent);
    }
    console.timeEnd("Worker::DownloadTime");

    parentPort.postMessage("Download is over – Closing thread!");
    process.exit(0);
  }
}

(async () => {
  await configDatatabase();
  await main();
})();

