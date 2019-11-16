import { ISite } from '../interfaces/iSite';

export type builderFunction = (keyword: string, page: number) => string;
export type downloadContentFunction = ($: CheerioStatic) => ISite[];
