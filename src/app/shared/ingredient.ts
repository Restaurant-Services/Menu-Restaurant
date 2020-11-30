import { Allergen } from './allergen';

export class Ingredient {
  id: number;
  name: string;
  allergens: Allergen[];

  constructor(id: number, name: string, allergens: Allergen[] = []) {
    this.id = id;
    this.name = name;
    this.allergens = allergens;
  }

  public equals(compare: Ingredient): boolean {
    return this.id === compare.id && this.name === compare.name;
  }
}
