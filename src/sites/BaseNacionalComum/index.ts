import loadCheerio from '../../tools/loadCheerio';
import Request from '../../tools/Request';
import UrlBuilder from "../../tools/UrlBuilder";
import verifyPagination from './verifyPagination';

import debug from 'debug';
const DEBUG = debug("BaseNacional::Main");

export default async function (keyword: string) {
  const URL = UrlBuilder.baseNacionalURL(keyword);

  const pageHTML = await Request(URL);

  const $ = loadCheerio(pageHTML);

  const hasPagination = verifyPagination($);

  if (hasPagination) {
    // 1. Utiliza do paralelismo para fazer download de várias páginas
    DEBUG("Paralelismo ativado!");
  }

  // 1. Baixa esta única paixa de modo sequencial
  DEBUG("Sequencial mesmo!");

}
