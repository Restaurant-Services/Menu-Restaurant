import { RecipeType } from './recipe-type';
import { Ingredient } from './ingredient';
import { Allergen } from './allergen';
import { ALLERGENS } from './mock/mock-allergens';
import { INGREDIENTS } from './mock/mock-ingredients';

export class Recipe {
  id: number;
  code: string;
  name: string;
  types: RecipeType;
  description: string;
  price: number;
  pieces: number;
  optionalIngredients: Ingredient[] = [];
  allergens: Allergen[] = [];

  constructor(id: number,
              code: string,
              name: string,
              types: RecipeType,
              description: string,
              price: number,
              pieces: number,
              optionalIngredients: number[],
              allergens: number[]) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.types = types;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    optionalIngredients.forEach((value: number) => {
      this.optionalIngredients.push(INGREDIENTS[value]);
    });
    this.optionalIngredients.sort((a: Ingredient, b: Ingredient) => {
      return a.id - b.id;
    });
    allergens.forEach((value: number) => {
      this.allergens.push(ALLERGENS[value]);
    });
    this.allergens.sort((a: Allergen, b: Allergen) => {
      return a.id - b.id;
    });
  }
}
