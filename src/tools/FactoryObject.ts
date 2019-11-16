import { IScrapperPorVir } from "../interfaces/iPorVir";

export default class FactoryObject {
  public static makePorVir(item: IScrapperPorVir) {
    return {
      content: "",
      description: "",
      image: item.children[1].attribs['style'],
      title: item.attribs["data-rotulo"],
      url: item.attribs.href,
    }
  }

  public static makeBaseNacional(cardsImages: Cheerio, cardsTitle: Cheerio, cardsURL: Cheerio, cardIndex: number) {
    const BASE_NACIONAL_PRE_URL = "http://basenacionalcomum.mec.gov.br";

    return {
      content: "",
      description: "",
      image: `${BASE_NACIONAL_PRE_URL}/${cardsImages[cardIndex].attribs.src}`,
      title: cardsTitle[cardIndex].children[0].data,
      url: `${BASE_NACIONAL_PRE_URL}${cardsURL[cardIndex].attribs.href}`,
    }
  }
}
