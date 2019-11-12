export default class AttrReplacer{

  public static porVirImagem( attr: string ): string{
    return attr
      .replace('background-image:url(', '')
      .slice(0,-1)
      .trim()
  }

}
