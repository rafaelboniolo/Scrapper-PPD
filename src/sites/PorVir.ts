const cheerio = require('cheerio');
import axios from 'axios'
import { iSite } from '../interfaces/iSite';
import Persistece from '../tools/Persistence';

export default (async (keyword: String) => {
    
    const {data} = await axios.get(`http://porvir.org/?s=${keyword}&buscar=Enviar`)
    const $ = cheerio.load(data)
    const links:iSite[] = []
    
    $("div.agregadora-imagens").map(
        (        item: string | number) => {
            $("div.agregadora-imagens")
                [item]
                .children
                .filter( (x: { name: string; }) => {
                    if(x.name)
                        if(x.name === 'a')
                            return true;
                    return false;
                })
                .map( (item: { attribs: { [x: string]: any; title: any; href: any; }; }) => {
                    
                    if(!item.attribs)
                        return null;

                    links.push({
                        title:  item.attribs.title,                    
                        description:    item.attribs['data-rotulo'],                    
                        image:   item.attribs.href,
                        content: "",
                        code : ""                    
                    })
                })
        })
    
    //TODO: fazer paginação, prever casos de string composta

    links.map(x=>console.log(x))

    // links.map(
    //     link => Persistece.save(link)
    // )

})


