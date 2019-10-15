import { iSite } from "../interfaces/iSite";
import Site from '../schemas/Site'

export default class Comparator{
    public static async compare (_this: iSite){
        
        const site:iSite = await Site.findOne({code:"code"}) 

        if(site)
            throw new Error("Conteúdo duplicado! Erro em: "+ this.name);
            
        
    }
}