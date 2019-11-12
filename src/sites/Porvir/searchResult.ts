import { ISite } from "../../interfaces/iSite";
import FactoryObject from "../../tools/FactoryObject";
// import Persistence from "../../tools/Persistence";

export default function ($: CheerioStatic): ISite[] {

  const articles = $("div.agregadora-imagens");

  const results: ISite[] = [];

  articles.map(articleIndex => {
    const article = articles[articleIndex].children;

    article
      .filter(containerContent => containerContent.name === "a")
      .map((content: CheerioElement) => {
        const factory = FactoryObject.makePorVir(content);
        results.push(factory);
      })
  })

  return results;
}



