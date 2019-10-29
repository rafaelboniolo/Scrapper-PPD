import { iScrapperPorVir } from "../interfaces/iPorVir";

export default class FactoryObject{
    public static makePorVir(item: iScrapperPorVir){
        return {
            title: item.attribs.title,
            description: item.attribs['data-rotulo'],
            image: item.attribs.href,
            content: "",
            code: ""
          }
    }
}