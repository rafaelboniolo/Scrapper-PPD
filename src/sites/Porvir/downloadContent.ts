import Axios, { AxiosResponse } from "axios";
import cheerio from 'cheerio';
import searchResult from "./searchResult";

export default async function (url: string) {
  // 1. Carregar a busca
  const response: AxiosResponse = await Axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);

  searchResult($);

}
