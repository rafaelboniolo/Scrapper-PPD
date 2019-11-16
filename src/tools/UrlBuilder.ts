export default class UrlBuilder {
  public static porVirUrlPerPage(keyword: string, page: number): string {
    return `http://porvir.org/?s=${keyword}&c=&cs=&t=&pg=${page}`;
  }

  public static porVirUrl(keyword: string): string {
    return `http://porvir.org/?s=${keyword}&buscar=Enviar`
  }

  public static baseNacionalURL(keyword: string): string {
    return `http://basenacionalcomum.mec.gov.br/pesquisar?q=${keyword}`;
  }
}
