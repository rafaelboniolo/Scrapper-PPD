import { IScrapperPorVir } from "../interfaces/iPorVir";

export default class FactoryObject {
  public static makePorVir(item: IScrapperPorVir) {
    return {
      content: "",
      description: "",
      image: "",
      title: item.attribs["data-rotulo"],
      url: item.attribs.href,
    }
  }
}
