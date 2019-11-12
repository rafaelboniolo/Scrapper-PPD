import debug from "debug";
import { ISite } from "../interfaces/iSite"
import Site from '../schemas/Site';
import Comparator from "../tools/Comparator"

const DEBUG = debug("Scrapper::Persistence");

export default class Persistence {
  public static async save(content: ISite) {
    try {
      await Comparator.compare(content);

      await Site.create(content);

      DEBUG("Downloaded page: ", content.url);
    } catch (err) {
      DEBUG("Error ao comparar", err);
      console.log(err);
    }
  }
}
