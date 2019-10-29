const cheerio = require('cheerio');
import axios from 'axios'

import hasPagination from './hasPagination';
import calculateNumberOfPages from './calculateNumberOfPages';

export default async function (keyword: String) {
  // 1. Carregar a busca
  const { data } = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`);
  const $ = cheerio.load(data);

  // 2. Verificar se há paginação
  if (hasPagination($)) {
    // 2.1 Calcular a quantidade de páginas que possui
    calculateNumberOfPages($);
    // 2.1 Faz o download de cada item em todas as páginas!
  }
  // 3. Não há paginação, faço download dos itens dessa página.


  // 2.1 Havendo paginação, realizar download por cada página


}
