const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (async (x) => {
    
    const {data} = await axios.get(`http://porvir.org/?s=${x}&buscar=Enviar`)
    const $ = cheerio.load(data)
    const links = []
    
    $("div.agregadora-imagens").map(
        item => {
            $("div.agregadora-imagens")
                [item]
                .children
                .filter( x => x.name === 'a')
                .map( item => {
                    links.push({
                        title:  item.attribs.title,                    
                        tag:    item.attribs['data-rotulo'],                    
                        link:   item.attribs.href                    
                    })
                })
        })
    
    console.log(`Encontrados ${x.length} links`);
    links.map(x => console.log(x.link))

    //TODO: fazer paginação, prever casos de string composta


})("juri+simulado")