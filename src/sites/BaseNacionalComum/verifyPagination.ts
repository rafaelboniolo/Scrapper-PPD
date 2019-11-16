const verifyPagination = ($: CheerioStatic) => {
  const pagesCounter = $("div.search-pages-counter");

  const counterArr = pagesCounter.text().trim().split(" ");

  const lastIndex = counterArr.length - 1;

  const maxResults = counterArr[lastIndex];

  if (maxResults) {
    const results = parseInt(maxResults, 10);

    if (results > 20) {
      return true
    }

    return false;
  }

  return false;
}

export default verifyPagination;
