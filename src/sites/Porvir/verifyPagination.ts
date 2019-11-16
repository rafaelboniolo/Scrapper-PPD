/**
 * @export
 * @param {*} $: Cheerio loaded instance
 */
export default function ($: any): boolean {
  const hasPagination: boolean = $(".pagination").children().length;
  return hasPagination;
}
