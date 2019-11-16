import loadCheerio from './loadCheerio';
import Persistence from './Persistence';
import Request from './Request';

import { builderFunction, downloadContentFunction } from './AuxiliaryTypes';

export default async function (
  pages: number,
  keyword: string,
  builder: builderFunction,
  download: downloadContentFunction): Promise<void> {
  for (let page = 1; page < pages + 1; page++) {
    const URL = builder(keyword, page);
    const pageHTML = await Request(URL);
    const $ = loadCheerio(pageHTML)
    const pageContent = download($);
    await Persistence.bulkSave(pageContent);
  }

  return;
}
