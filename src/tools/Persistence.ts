import { iSite } from "../interfaces/iSite";
import Comparator from "./Comparator";
import Site from "../schemas/Site";

export default class Persistece{
    public static save ( site:iSite ){
        Comparator
            .compare(site)
            .then( site => Site.create(site))
            .catch( err => console.log(err))
    }
}