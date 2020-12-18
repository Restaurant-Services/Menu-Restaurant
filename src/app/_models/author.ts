export class Author {
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static sort(a: Author, b: Author): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.name.localeCompare(b.name);
    }
    return sort;
  }
}
