import { resolve } from 'path';
import parallelDownload from '../../tools/parallelDownload';
import sequencialDownload from '../../tools/sequencialDownload';
import UrlBuilder from '../../tools/UrlBuilder';
import calculateNumberOfPages from './calculateNumberOfPages';

import debug from 'debug';
import loadCheerio from '../../tools/loadCheerio';
import Request from '../../tools/Request';
const DEBUG = debug("Porvir::Main");

const USE_PARALLELISM = process.env.USE_PARALLELISM || false;
const PorvirWorkerPath = resolve(__dirname, "worker.ts");

export default async function (keyword: string) {
  const URL = UrlBuilder.porVirUrl(keyword);

  const pageHTML = await Request(URL);

  const $ = loadCheerio(pageHTML);

  const pages = calculateNumberOfPages($);

  if (USE_PARALLELISM) {
    DEBUG("Usando paralelismo!");
    parallelDownload(pages, keyword, PorvirWorkerPath);
    return;
  }

  DEBUG("Usando Sequencial!");
  sequencialDownload(pages, keyword);
  return;
}


