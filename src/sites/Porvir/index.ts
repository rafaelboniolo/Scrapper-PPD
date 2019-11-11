import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio';
import { resolve } from 'path';
import parallelDownload from '../../tools/parallelDownload';
import UrlBuilder from '../../tools/UrlBuilder';
import calculateNumberOfPages from './calculateNumberOfPages';
import downloadContent from './downloadContent';

const USE_PARALLELISM = process.env.USE_PARALLELISM || false;
const PorvirWorkerPath = resolve(__dirname, "worker.ts");

export default async function (keyword: string) {
  const url = `http://porvir.org/?s=${keyword}&buscar=Enviar`;

  // 1. Carregar a busca
  const response: AxiosResponse = await axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);

  const pages = calculateNumberOfPages($);

  if (USE_PARALLELISM) {
    // do something
    parallelDownload(pages, keyword, PorvirWorkerPath);
  } else {
    for (let page = 1; page < pages + 1; page++) {
      const urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);
      downloadContent(urlPerPage);
    }
  }

}


