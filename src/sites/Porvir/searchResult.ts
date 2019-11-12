import FactoryObject from "../../tools/FactoryObject";
import Persistence from "../../tools/Persistence";

export default function ($: CheerioStatic) {

  const articles = $("div.agregadora-imagens");

  articles.map(articleIndex => {
    const article = articles[articleIndex].children;

    const promises = article
      .filter(containerContent => containerContent.name === "a")
      .map(async (content: CheerioElement) => {
        const factory = FactoryObject.makePorVir(content);
        await Persistence.save(factory);
      })

    Promise.all(promises);
  })
}



