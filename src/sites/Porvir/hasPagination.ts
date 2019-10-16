/**
 * @export
 * @param {*} $: Cheerio loaded instance
 */
export default function ($: any): Boolean {
  return $(".pagination").children().length;
}
