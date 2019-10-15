import { iSite } from "../interfaces/iSite"
import Site from "../schemas/Site"
import Comparator from "../tools/Comparator"

export default class Persistece{
    public static save ( site:iSite ){
        Comparator
            .compare(site)
            .then( site => Site.create(site))
            .catch( err => console.log(err))
    }
}