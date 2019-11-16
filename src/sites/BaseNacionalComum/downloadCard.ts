import { ISite } from "../../interfaces/iSite";
import FactoryObject from "../../tools/FactoryObject";

const downloadCard = ($: CheerioStatic): ISite[] => {
  const CardsBody = $("div.news-card-body").find("div.row");

  const cardsImages = CardsBody.children("div").find("img");
  const cardsURL = CardsBody.children("div").find("div").find("a")
  const cardsTitle = cardsURL.children("h5");

  const cards: ISite[] = [];

  CardsBody.map(cardIndex => {
    const card = FactoryObject.makeBaseNacional(cardsImages, cardsTitle, cardsURL, cardIndex);

    cards.push(card);
  })


  return cards;
}

export default downloadCard;
