export class Allergen {
  id: number;
  name: string;
  // svn: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }


  public equals(compare: Allergen): boolean {
    return this.id === compare.id && this.name === compare.name;
  }
}
