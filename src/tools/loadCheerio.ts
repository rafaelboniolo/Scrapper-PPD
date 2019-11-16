import Cheerio from "cheerio";

/**
 *
 *
 * @export
 * @param {string} data: objeto data da resposta do axios <AxiosResponse>.data;
 * @returns {CheerioStatic} Instância do cheerio loadada com o html
 */
export default function (data: string): CheerioStatic {
  const $: CheerioStatic = Cheerio.load(data);

  return $;
}
