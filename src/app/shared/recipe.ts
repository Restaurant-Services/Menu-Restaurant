import { Allergen } from './allergen';
import { Ingredient } from './ingredient';
// import { OptionalIngredient } from './optional-ingredient';
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
  optionalIngredients: Ingredient[] = [];
  allergens: Allergen[] = [];
  png: string;

  constructor(id: number,
              code: string,
              name: string,
              type: RecipeType,
              description: string,
              price: number,
              pieces: number,
              optIngredients: number[],
              allergens: number[],
              alternativeCode: string = null) {
              // mustIngredients: number[] = []) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    optIngredients.forEach((ingredientId: number) => {
      this.optionalIngredients.push(INGREDIENTS[ingredientId]);
      // this.optionalIngredients.push(new OptionalIngredient(INGREDIENTS[ingredientId]));
    });
    // mustIngredients.forEach((ingredientId: number) => {
    //   this.optionalIngredients.push(new OptionalIngredient(INGREDIENTS[ingredientId], true));
    // });
    allergens.forEach((allergen: number) => {
      this.allergens.push(ALLERGENS[allergen]);
    });
    this.png = (alternativeCode === null ? code.replace('VEG', '') : alternativeCode);
    this.png = 'assets/img/' + this.png;
    this.png += '.PNG';
    this.sortArrays();
  }

  public static sort(a: Recipe, b: Recipe): number {
    let sort: number = a.id - b.id;
    if (sort === 0) {
      sort = a.code.localeCompare(b.code);
    }
    return sort;
  }

  public equals(compare: Recipe): boolean {
    return this.id === compare.id && this.code === compare.code;
  }

  private sortArrays(): void {
    this.optionalIngredients.sort(Ingredient.sort);
    this.allergens.sort(Allergen.sort);
  }

  private noClones(): void {
    for (let i = 1; i < this.optionalIngredients.length; i++) {
      if (this.optionalIngredients[i - 1].equals(this.optionalIngredients[i])) {
        this.optionalIngredients.splice(i, 1);
        i--;
      }
    }
    for (let i = 1; i < this.allergens.length; i++) {
      if (this.allergens[i - 1].equals(this.allergens[i])) {
        this.allergens.splice(i, 1);
        i--;
      }
    }
  }
}
