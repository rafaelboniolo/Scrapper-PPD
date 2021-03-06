import { ISite } from "../interfaces/iSite";
import Site from '../schemas/Site'

export default class Comparator {
  public static async compare(content: ISite): Promise<void> {
    const isUnique = await Site.findOne({ url: content.url })

    if (isUnique) {
      throw new Error("CONTEÚDO DUPLICADO :: " + content.url);
    }
  }
}
