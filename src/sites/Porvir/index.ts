import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio';
import UrlBuilder from '../../tools/UrlBuilder';
import calculateNumberOfPages from './calculateNumberOfPages';
import downloadContent from './downloadContent';

export default async function (keyword: string) {
  const url = `http://porvir.org/?s=${keyword}&buscar=Enviar`;

  // 1. Carregar a busca
  const response: AxiosResponse = await axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);


  const pages = calculateNumberOfPages($);

  for (let page = 1; page < pages+1; page++) {

    const urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);

    downloadContent(urlPerPage);
  }

}


