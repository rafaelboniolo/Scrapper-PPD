import axios from 'axios';
import cheerio from 'cheerio';

import { iSite } from "../../interfaces/iSite";
import Persistence from '../../tools/Persistence';
import { iScrapperPorVir } from '../../interfaces/iPorVir';
import FactoryObject from '../../tools/FactoryObject';

export default async function (keyword: string) {
  const { data } = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`)
  const $ = cheerio.load(data)
  const links: iSite[] = []

  $("div.agregadora-imagens").map( (item: string | number) => {
      $("div.agregadora-imagens")[item]
          .children
          .filter( ( item: iScrapperPorVir ) => item.name && item.name === 'a' )
          .filter( ( item: iScrapperPorVir ) => item.attribs )
          .map( ( item: iScrapperPorVir )    => links.push(FactoryObject.makePorVir(item)) )
    })

  //TODO: fazer paginação, prever casos de string composta

  links.map(link => {
    console.log(link);
    Persistence.save(link);
  })
}
