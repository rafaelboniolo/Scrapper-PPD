import { ISite } from "../interfaces/iSite";
import Site from '../schemas/Site'

export default class Comparator {
  public static async compare(content: ISite) {
    const site = await Site.findOne({ code: content.code })

    if (site) {
      throw new Error("Conteúdo duplicado! Erro em: " + this.name);
    }

    await Site.create(content);
  }
}
