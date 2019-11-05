import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio';
import calculateNumberOfPages from './calculateNumberOfPages';
import hasPagination from './hasPagination';
import downloadContent from './downloadContent';

export default async function (keyword: string) {
  
  const url:string = `http://porvir.org/?s=${keyword}&buscar=Enviar`;

  // 1. Carregar a busca
  const response: AxiosResponse = await axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);


  if (hasPagination($)) {

    const pages = calculateNumberOfPages($);
    
    // Aplicar o paralelismo aqui ====================

    for (let page = 1; page < pages+1; page++) {    
      
      const urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);
      
      downloadContent(urlPerPage);
    }

  }

  downloadContent(url);

}


