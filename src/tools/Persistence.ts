import debug from "debug";
import { ISite } from "../interfaces/iSite"
import Site from "../schemas/Site"
import Comparator from "../tools/Comparator"
import debug from 'debug'

const DEBUG = debug("Scrapper::Persistence");

export default class Persistece {
  public static save(site: ISite) {
    Comparator
      .compare(site)
      .then(test => {
        Site.create(test);
        DEBUG(`Site baixado!! ${site.url}`)
      })
      .catch(err => DEBUG("Erro ao comparar objetos: ", err))
  }
}
