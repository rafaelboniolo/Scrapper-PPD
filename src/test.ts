import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio';
import hasPagination from './sites/Porvir/hasPagination';
// import calculateNumberOfPages from './sites/Porvir/calculateNumberOfPages';
import UrlBuilder from './tools/UrlBuilder';
import downloadContent from './sites/Porvir/downloadContent';

export default async function teste (keyword: string) {

  const url:string = `http://porvir.org/?s=${keyword}&buscar=Enviar`;

  // 1. Carregar a busca
  const response: AxiosResponse = await axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);


  if (hasPagination($)) {

    const pages = 0 //calculateNumberOfPages($);

    // Aplicar o paralelismo aqui ====================

    for (let page = 1; page < pages+1; page++) {
        let urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);
        downloadContent(urlPerPage);
    }

  }
  downloadContent(url);

}


teste("metodologias")
