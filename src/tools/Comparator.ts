import { ISite } from "../interfaces/iSite";
import Site from '../schemas/Site'

export default class Comparator {
  public static async compare(content: ISite) {
    const site = await Site.findOne({ url: content.url })

    if (site) {
      throw new Error("CONTEÚDO DUPLICADO :: " + content.url);
    }
  }
}
