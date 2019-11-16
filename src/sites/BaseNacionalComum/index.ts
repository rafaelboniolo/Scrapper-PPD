import { resolve } from 'path';
import loadCheerio from '../../tools/loadCheerio';
import parallelDownload from '../../tools/parallelDownload';
import Request from '../../tools/Request';
import sequencialDownload from '../../tools/sequencialDownload';
import UrlBuilder from "../../tools/UrlBuilder";
import calculateNumberOfPages from './calculateNumberOfPages';
import downloadCard from './downloadCard';

import debug from 'debug';
const DEBUG = debug("BaseNacional::Main");

const USE_PARALLELISM = process.env.USE_PARALLELISM || false;

const BNCWorkerPath = resolve(__dirname, "worker.ts");

export default async function (keyword: string) {
  const URL = UrlBuilder.baseNacionalURL(keyword);

  const pageHTML = await Request(URL);

  const $ = loadCheerio(pageHTML);

  const numberOfPages = calculateNumberOfPages($);

  if (USE_PARALLELISM) {
    DEBUG("Usando paralelismo!");
    return parallelDownload(numberOfPages, keyword, BNCWorkerPath);
  }

  // 1. Baixa esta única paixa de modo sequencial
  DEBUG("Usando sequencial");
  sequencialDownload(
    numberOfPages,
    keyword,
    UrlBuilder.baseNacionalURLPerPage,
    downloadCard
  )

}
