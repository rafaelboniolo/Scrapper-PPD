import { parentPort, workerData } from 'worker_threads';
import configDatatabase from '../../config/database';
import iThreadsDistribution from '../../interfaces/iThreadsDistribution';
import loadCheerio from '../../tools/loadCheerio';
import Persistence from "../../tools/Persistence";
import Request from '../../tools/Request';
import UrlBuilder from '../../tools/UrlBuilder';
import downloadCard from './downloadCard';

const main = async () => {
  if (parentPort) {
    const { dt, keyword }: { dt: iThreadsDistribution, keyword: string } = workerData

    parentPort.postMessage(`I'll be working from page ${dt.start} to ${dt.end}`);

    for (let i = dt.start; i <= dt.end; i++) {
      const URL = UrlBuilder.baseNacionalURLPerPage(keyword, i);
      const pageHTML = await Request(URL);
      const $ = loadCheerio(pageHTML)
      const pageContent = downloadCard($);
      await Persistence.bulkSave(pageContent);
    }

    parentPort.postMessage("Download is over – Closing thread!");
    process.exit(0);
  }
}

(async () => {
  await configDatatabase();
  await main();
})();

