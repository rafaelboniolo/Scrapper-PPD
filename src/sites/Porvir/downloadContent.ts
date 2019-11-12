import Axios, { AxiosResponse } from "axios";
import cheerio from 'cheerio';

export default async function (url: string): Promise<CheerioStatic> {
  const response: AxiosResponse = await Axios.get(url);

  if (response.status !== 200) {
    throw new Error("Resposta do Axios é inválida.")
  }

  const $: CheerioStatic = cheerio.load(response.data);

  return $;
}
