import { Allergen } from './allergen';

export class Ingredient {
  id: number;
  name: string;
  noteName: string;
  allergens: Allergen[];

  constructor(id: number, name: string, allergens: Allergen[] = [], noteName: string = name.toLowerCase()) {
    this.id = id;
    this.name = name;
    this.noteName = noteName;
    this.allergens = allergens.sort(Allergen.sort);
  }

  public static sort(a: Ingredient, b: Ingredient): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.name.localeCompare(b.name);
    }
    return sort;
  }

  public equals(compare: Ingredient): boolean {
    return this.id === compare.id && this.name === compare.name;
  }
}
