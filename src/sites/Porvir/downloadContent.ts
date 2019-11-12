import Axios, { AxiosResponse } from "axios";
import cheerio from 'cheerio';

export default async function (url: string): Promise<CheerioStatic> {
  // 1. Carregar a busca
  const response: AxiosResponse = await Axios.get(url);

  const $: CheerioStatic = cheerio.load(response.data);

  return $;
}
