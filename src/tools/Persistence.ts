import { ISite } from "../interfaces/iSite"
import Site from "../schemas/Site"
import Comparator from "../tools/Comparator"
import debug from 'debug'

const DEBUG = debug('Scrapper::Persistence')

export default class Persistece {
  public static save(site: ISite) {
    Comparator
      .compare(site)
      .then(site => Site.create(site))
      .catch(err => DEBUG("Erro ao comparar objetos: ", err))
  }
}
