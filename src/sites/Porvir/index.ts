const cheerio = require('cheerio');
import axios from 'axios'

import hasPagination from './hasPagination';

export default async function (keyword: String) {
  // 1. Carregar a busca
  console.time('tempo');
  const { data } = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`);
  console.timeEnd('tempo')
  const $ = cheerio.load(data);

  // 2. Verificar se há paginação

  if (hasPagination($)) {
    // 2.1 Tem paginação
    // 2.1 Faz o download de cada item em todas as páginas!

  }

  // 3. Não há paginação, faço download dos itens dessa página.

  // 2.1 Havendo paginação, realizar download por cada página


}
