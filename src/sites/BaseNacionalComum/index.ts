import { resolve } from 'path';
import loadCheerio from '../../tools/loadCheerio';
import parallelDownload from '../../tools/parallelDownload';
import Request from '../../tools/Request';
import UrlBuilder from "../../tools/UrlBuilder";
import calculateNumberOfPages from './calculateNumberOfPages';
import verifyPagination from './verifyPagination';

import debug from 'debug';
const DEBUG = debug("BaseNacional::Main");

const BNCWorkerPath = resolve(__dirname, "worker.ts");

export default async function (keyword: string) {
  const URL = UrlBuilder.baseNacionalURL(keyword);

  const pageHTML = await Request(URL);

  const $ = loadCheerio(pageHTML);

  const hasPagination = verifyPagination($);

  if (hasPagination) {
    DEBUG("Paralelismo ativado!");
    // 1. Calcula a quantidade de páginas
    const numberOfPages = calculateNumberOfPages($);

    return parallelDownload(numberOfPages, keyword, BNCWorkerPath);
    // 2. Utiliza do paralelismo para fazer download de várias páginas
  }

  // 1. Baixa esta única paixa de modo sequencial
  DEBUG("Sequencial mesmo!");

}
