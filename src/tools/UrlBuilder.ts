export default class UrlBuilder{

    public static porVirUrlPerPage (keyword:string, page: number): string {
        return `http://porvir.org/?s=${keyword}&c=&cs=&t=&pg=${page}`;

    }

}
