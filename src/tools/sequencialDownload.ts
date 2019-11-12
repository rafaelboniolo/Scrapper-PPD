import downloadContent from "../sites/Porvir/downloadContent";
import searchResult from "../sites/Porvir/searchResult";
import Persistence from "./Persistence";
import UrlBuilder from "./UrlBuilder";

export default async function (pages: number, keyword: string) {
  for (let page = 1; page < pages + 1; page++) {
    const urlPerPage = UrlBuilder.porVirUrlPerPage(keyword, page);
    const actualPage = await downloadContent(urlPerPage);
    const pageContent = await searchResult(actualPage);
    await Persistence.bulkSave(pageContent);
  }
}
