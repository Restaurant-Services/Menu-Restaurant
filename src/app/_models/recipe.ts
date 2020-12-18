import { Allergen } from './allergen';
import { OptionalIngredient } from './optional-ingredient';
import { RecipeType } from './recipe-type';
import { ALLERGENS } from './_mocks/mock-allergens';
import { INGREDIENTS } from './_mocks/mock-ingredients';

export class Recipe {
  id: number;
  code: string;
  name: string;
  type: RecipeType;
  description: string;
  price: number;
  pieces: number;
  allergens: Allergen[] = [];
  ingredients: OptionalIngredient[] = [];
  png: string;

  constructor(id: number,
              code: string,
              name: string,
              type: RecipeType,
              description: string,
              price: number,
              pieces: number = null,
              allergens: number[] = [],
              ingredientsIncluded: number[] = [],
              ingredientsNotIncluded: number[] = [],
              ingredientsMustHave: number[] = [],
              pngNameWithoutExt: string = null) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    ingredientsIncluded.forEach((ingredientId: number) => {
      this.ingredients.push(new OptionalIngredient(INGREDIENTS[ingredientId], true));
    });
    ingredientsNotIncluded.forEach((ingredientId: number) => {
      this.ingredients.push(new OptionalIngredient(INGREDIENTS[ingredientId], true, false));
    });
    ingredientsMustHave.forEach((ingredientId: number) => {
      this.ingredients.push(new OptionalIngredient(INGREDIENTS[ingredientId]));
    });
    allergens.forEach((allergen: number) => {
      this.allergens.push(ALLERGENS[allergen]);
    });
    this.png = (pngNameWithoutExt === null ? code : pngNameWithoutExt);
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
    this.ingredients.sort(OptionalIngredient.sort);
    for (let i = 1; i < this.ingredients.length; i++) {
      if (this.ingredients[i].equals(this.ingredients[i - 1])) {
        i--;
        this.ingredients.splice(i, 1);
      }
    }
    this.ingredients.forEach((optionalIngredient: OptionalIngredient) => {
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
    if (!compare) {
      return false;
    }
    return this.id === compare.id && this.code === compare.code;
  }
}
