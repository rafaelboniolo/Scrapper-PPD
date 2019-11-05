import { ISite } from "../interfaces/iSite"
import Site from "../schemas/Site"
import Comparator from "../tools/Comparator"

import Debug from 'debug';
const debug = Debug("Comparator::Checking");

export default class Persistece {
  public static save(site: ISite) {
    Comparator
      .compare(site)
      .then(site => Site.create(site))
      .catch(err => debug("Erro ao comparar objetos: ", err))
  }
}
