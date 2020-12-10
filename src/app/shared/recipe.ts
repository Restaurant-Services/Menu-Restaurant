import { Allergen } from './allergen';
import { OptionalIngredient } from './optional-ingredient';
import { RecipeType } from './recipe-type';
import { ALLERGENS } from './mock/mock-allergens';
import { INGREDIENTS } from './mock/mock-ingredients';

export class Recipe {
  id: number;
  code: string;
  name: string;
  type: RecipeType;
  description: string;
  price: number;
  pieces: number;
  optionalIngredients: OptionalIngredient[] = [];
  allergens: Allergen[] = [];
  png: string;

  constructor(id: number,
              code: string,
              name: string,
              type: RecipeType,
              description: string,
              price: number,
              pieces: number,
              includedIngredients: number[] = [],
              allergens: number[] = [],
              alternativeCode: string = null,
              notFreeIngredients: number[] = [],
              mustIngredients: number[] = []) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    includedIngredients.forEach((ingredientId: number) => {
      this.optionalIngredients.push(new OptionalIngredient(INGREDIENTS[ingredientId], true));
    });
    notFreeIngredients.forEach((ingredientId: number) => {
      this.optionalIngredients.push(new OptionalIngredient(INGREDIENTS[ingredientId], true, false));
    });
    mustIngredients.forEach((ingredientId: number) => {
      this.optionalIngredients.push(new OptionalIngredient(INGREDIENTS[ingredientId]));
    });
    allergens.forEach((allergen: number) => {
      this.allergens.push(ALLERGENS[allergen]);
    });
    this.png = (alternativeCode === null ? code.replace('VEG', '') : alternativeCode);
    this.png = 'assets/img/' + this.png;
    this.png += '.PNG';
    this.sortAndCleanArrays();
  }

  public static sort(a: Recipe, b: Recipe): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.code.localeCompare(b.code);
    }
    return sort;
  }

  private sortAndCleanArrays(): void {
    this.optionalIngredients.sort(OptionalIngredient.sort);
    for (let i = 1; i < this.optionalIngredients.length; i++) {
      if (this.optionalIngredients[i].equals(this.optionalIngredients[i - 1])) {
        i--;
        this.optionalIngredients.splice(i, 1);
      }
    }
    this.optionalIngredients.forEach((optionalIngredient: OptionalIngredient) => {
      optionalIngredient.ingredient.allergens.forEach((allergen: Allergen) => {
        this.allergens.push(allergen);
      });
    });
    this.allergens.sort(Allergen.sort);
    for (let i = 1; i < this.allergens.length; i++) {
      if (this.allergens[i].equals(this.allergens[i - 1])) {
        i--;
        this.allergens.splice(i, 1);
      }
    }
  }

  public equals(compare: Recipe): boolean {
    return this.id === compare.id && this.code === compare.code;
  }
}
