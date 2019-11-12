import { resolve } from 'path';
import parallelDownload from '../../tools/parallelDownload';
import UrlBuilder from '../../tools/UrlBuilder';
import calculateNumberOfPages from './calculateNumberOfPages';
import downloadContent from './downloadContent';
import searchResult from './searchResult';

const USE_PARALLELISM = process.env.USE_PARALLELISM || false;
const PorvirWorkerPath = resolve(__dirname, "worker.ts");

export default async function (keyword: string) {
  const url = UrlBuilder.porVirUrl(keyword);

  // $ is a loaded cheerio instance
  const $ = await downloadContent(url);

  const pages = calculateNumberOfPages($);

  if (USE_PARALLELISM) {
    parallelDownload(pages, keyword, PorvirWorkerPath);
  } else {
    for (let page = 1; page < pages + 1; page++) {
      const urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);
      const actualPage = await downloadContent(urlPerPage);
      await searchResult(actualPage);
    }
  }
}


