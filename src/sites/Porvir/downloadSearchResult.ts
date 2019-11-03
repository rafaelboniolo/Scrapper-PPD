import axios from 'axios';
import cheerio from 'cheerio';

import { IScrapperPorVir } from '../../interfaces/iPorVir';
import { ISite } from "../../interfaces/iSite";
import FactoryObject from '../../tools/FactoryObject';
import Persistence from '../../tools/Persistence';

export default async function (keyword: string) {
  const { data } = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`)
  const $: CheerioStatic = cheerio.load(data)
  const links: ISite[] = []

  $("div.agregadora-imagens").map((item: string | number) => {
    $("div.agregadora-imagens")[item]
      .children
      .filter((item: IScrapperPorVir) => item.name && item.name === 'a')
      .filter((item: IScrapperPorVir) => item.attribs)
      .map((item: IScrapperPorVir) => links.push(FactoryObject.makePorVir(item)))
  })

  // TODO: fazer paginação, prever casos de string composta

  links.map(link => {
    Persistence.save(link);
  })
}
