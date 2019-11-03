/**
 * @export
 * @param {CheerioStatic} $: CheerioStatic loaded instance
 */

export default function ($: CheerioStatic): number {
  const counter = $(".contador-resultados").text().trim();
  const resultVector = counter.split(" ");
  const maxPages = resultVector[2];

  return parseInt(maxPages, 10);
}
