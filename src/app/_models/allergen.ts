export class Allergen {
  id: number;
  name: string;
  // svn: string;

  constructor(name: string) {
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
    if (!compare) {
      return false;
    }
    return this.id === compare.id && this.name === compare.name;
  }
}
