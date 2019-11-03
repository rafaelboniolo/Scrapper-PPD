import axios, { AxiosResponse } from 'axios'
import cheerio from 'cheerio';

import calculateNumberOfPages from './calculateNumberOfPages';
import downloadSearchResult from './downloadSearchResult';
import hasPagination from './hasPagination';

export default async function (keyword: string) {
  // 1. Carregar a busca
  const response: AxiosResponse = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`);

  const $: CheerioStatic = cheerio.load(response.data);

  // 2. Verificar se há paginação
  if (hasPagination($)) {
    // 2.1 Calcular a quantidade de páginas que possui
    const pages = calculateNumberOfPages($);

    // Faz download da página atual
    downloadSearchResult($);
  }
  // 3. Não há paginação, faço download dos itens dessa página.


  // 2.1 Havendo paginação, realizar download por cada página


}
