export class Allergen {
  id: number;
  name: string;
  // svn: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public static sort(a: Allergen, b: Allergen): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.name.localeCompare(b.name);
    }
    return sort;
  }

  public equals(compare: Allergen): boolean {
    return this.id === compare.id && this.name === compare.name;
  }
}
