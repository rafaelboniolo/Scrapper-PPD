import Debug from 'debug';

const debug = Debug("Scrapper::Porvir::calculateNumberOfPages");
/**
 *
 *
 * @export
 * @param {CheerioStatic} $: CheerioStatic loaded instance
 * @returns {number} the number of pages the search contains minus 1, cuz is the page we are at
 */
export default function ($: CheerioStatic): number {
  const numberOfContentPerPage = 12;

  const counter = $(".contador-resultados").text().trim();
  const counterSplitted = counter.split(" ");
  const results = counterSplitted[2];

  const base = 10; // base decimal
  const parsed = parseInt(results, base)

  const numberOfPages = Math.round(parsed / numberOfContentPerPage);

  // For debug purposes
  debug(`Found ${numberOfPages} for porvir content search`);

  return numberOfPages;
}
