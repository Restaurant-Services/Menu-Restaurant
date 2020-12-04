import { Author } from './author';

export class RecipeType {
  id: number;
  name: string;
  svg: string;
  svgAuthor: Author;
  displayName: string;

  constructor(id: number, name: string, svg: string, svgAuthor: Author, displayName: string = name) {
    this.id = id;
    this.name = name;
    this.svg = svg;
    this.svgAuthor = svgAuthor;
    this.displayName = displayName;
  }

  public static sort(a: RecipeType, b: RecipeType): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.name.localeCompare(b.name);
    }
    return sort;
  }

  getSVGPathFromComponent(): string {
    return `../${this.getSVGPathFromRoot()}`;
  }

  getSVGPathFromRoot(): string {
    return `assets/svg/${this.getSVG()}`;
  }

  getSVG(): string {
    return `${this.svg}.svg`;
  }

  getLink(): string {
    return `https://${this.getLinkWithoutHTTP()}/`;
  }

  getServiceName(): string {
    return 'Flaticon';
  }

  getLinkWithoutHTTP(): string {
    return `www.${this.getServiceName().toLowerCase()}.com`;
  }

  getAuthorLink(): string {
    return `${this.getLink()}authors/${this.svgAuthor.name.toLowerCase()}`;
  }

  public equals(compare: RecipeType): boolean {
    return this.id === compare.id && this.name === compare.name;
  }
}
