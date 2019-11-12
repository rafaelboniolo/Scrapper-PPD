import debug from "debug";
import { ISite } from "../interfaces/iSite"
import Site from '../schemas/Site';
import Comparator from "../tools/Comparator"

const DEBUG = debug("Scrapper::Persistence");

export default class Persistence {
  public static async save(content: ISite) {
    try {
      await Comparator.compare(content);

      const site = await Site.create(content);

      console.log("Downloaded page: ", site);
    } catch (err) {
      DEBUG("Error ao comparar", err);
      console.log(err);
    }
  }

  public static async bulkSave(contents: ISite[]) {
    try {
      contents.map(async (ct) => {
        await Comparator.compare(ct)
        await Site.create(ct);
      })
    } catch (err) {
      DEBUG("Error ao comparar", err);
      console.log(err);
    }
  }
}
