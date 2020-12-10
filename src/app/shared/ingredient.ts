import { Allergen } from './allergen';

export class Ingredient {
  id: number;
  name: string;
  price: number;
  allergens: Allergen[];
  noteName: string;

  constructor(id: number,
              name: string,
              price: number = 0.0,
              allergens: Allergen[] = [],
              noteName: string = name.toLowerCase()) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.allergens = allergens.sort(Allergen.sort);
    this.noteName = noteName;
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
