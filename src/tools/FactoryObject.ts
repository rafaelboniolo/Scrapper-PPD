import { IScrapperPorVir } from "../interfaces/iPorVir";

export default class FactoryObject {
  public static makePorVir(item: IScrapperPorVir) {
    return {
      code: "",
      content: "",
      description: item.attribs['data-rotulo'],
      image: item.attribs.href,
      title: item.attribs.title,
    }
  }
}
