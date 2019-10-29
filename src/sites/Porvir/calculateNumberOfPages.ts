/**
 * @export
 * @param {CheerioStatic} $: CheerioStatic loaded instance
 */
export default function ($: CheerioStatic) {
  const counter = $(".contador-resultados").text();
  const maxPages = counter.trim().split(" ")[2];

  console.log("counter: ", counter);
  console.log("MaxPages: ", maxPages);
}
