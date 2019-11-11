import FactoryObject from "../../tools/FactoryObject";
import Persistence from "../../tools/Persistence";

export default async function ($: CheerioStatic) {

  const articles = $("div.agregadora-imagens");

  articles.map(articleIndex => {
    const article = articles[articleIndex].children;

    article
      // Filtrar somente os articles que o nome da tag é 'a' (anchor)
      .filter(containerContent => containerContent.name === "a")
      // Iterar sobre os atributos de cada conteudo e criar a factory
      .map((content: CheerioElement) => {
        const factory = FactoryObject.makePorVir(content);
        Persistence.save(factory);
      })
  })
}



