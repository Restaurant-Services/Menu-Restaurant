import {Author} from './author';

export class RecipeType {
  id: number;
  name: string;
  svg: string;
  svgAuthor: Author;

  constructor(id: number, name: string, svg: string, svgAuthor: Author) {
    this.id = id;
    this.name = name;
    this.svg = svg;
    this.svgAuthor = svgAuthor;
  }

  getSVGPathFromComponent(): string {
    return `../../${this.getSVGPathFromRoot()}`;
  }

  getSVGPathFromRoot(): string {
    return `assets/svg/${this.getSVG()}`;
  }

  getSVG(): string {
    return `${this.svg}.svg`;
  }

  getLink(): string {
    return `https://${this.getLinkWithoutHTTP()}`;
  }

  getLinkWithoutHTTP(): string {
    return `www.flaticon.com`;
  }

  getAuthorName(): string {
    return this.svgAuthor.name;
  }

  getAuthorLink(): string {
    return `${this.getLink()}authors/${this.getAuthorName().toLowerCase()}`;
  }
}
