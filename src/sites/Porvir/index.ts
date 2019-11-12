import { resolve } from 'path';
import parallelDownload from '../../tools/parallelDownload';
import sequencialDownload from '../../tools/sequencialDownload';
import UrlBuilder from '../../tools/UrlBuilder';
import calculateNumberOfPages from './calculateNumberOfPages';
import downloadContent from './downloadContent';

import debug from 'debug';
const DEBUG = debug("Porvir::Main");

const USE_PARALLELISM = process.env.USE_PARALLELISM || false;
const PorvirWorkerPath = resolve(__dirname, "worker.js");

export default async function (keyword: string) {
  const url = UrlBuilder.porVirUrl(keyword);

  // $ is a loaded cheerio instance
  const $ = await downloadContent(url);

  const pages = calculateNumberOfPages($);

  if (USE_PARALLELISM) {
    DEBUG("Usando paralelismo!");
    parallelDownload(pages, keyword, PorvirWorkerPath);
  } else {
    DEBUG("Usando Sequencial!");
    sequencialDownload(pages, keyword);
  }
}


