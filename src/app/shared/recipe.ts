import { RecipeType } from './recipe-type';
import { Ingredient } from './ingredient';
import { Allergen } from './allergen';
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
              optionalIngredients: number[],
              allergens: number[],
              alternativeCode: string = null) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    optionalIngredients.forEach((optionalIngredient: number) => {
      this.optionalIngredients.push(INGREDIENTS[optionalIngredient]);
    });
    this.optionalIngredients.sort((a: Ingredient, b: Ingredient) => {
      return a.id - b.id;
    });
    allergens.forEach((allergen: number) => {
      this.allergens.push(ALLERGENS[allergen]);
    });
    this.allergens.sort((a: Allergen, b: Allergen) => {
      return a.id - b.id;
    });
    this.png = (alternativeCode === null ? code.replace('VEG', '') : alternativeCode);
    this.png = 'assets/img/' + this.png;
    this.png += '.PNG';
  }

  public equals(compare: Recipe): boolean {
    return this.id === compare.id && this.code === compare.code;
  }
}
