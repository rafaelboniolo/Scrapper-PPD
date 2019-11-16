const RESULTS_PER_PAGE = 20;

const calculateNumberOfPages = ($: CheerioStatic): number => {
  const pagesCounter = $("div.search-pages-counter");

  const counterArr = pagesCounter.text().trim().split(" ");
  const lastIndex = counterArr.length - 1;
  const maxResults = counterArr[lastIndex];

  if (maxResults) {
    const numberOfResults = parseInt(maxResults, 10);

    const pages = Math.round(numberOfResults / RESULTS_PER_PAGE);

    return pages;
  }

  return -1;
}

export default calculateNumberOfPages;
