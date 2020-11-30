export class Author {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
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
