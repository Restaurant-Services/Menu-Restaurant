import { Allergen } from './allergen';
import { Ingredient } from './ingredient';
import { RecipeType } from './recipe-type';
import { ALLERGENS } from './mock/mock-allergens';
import { INGREDIENTS } from './mock/mock-ingredients';
// import { OptionalIngredient } from './optional-ingredient';

export class Recipe {
  id: number;
  code: string;
  name: string;
  type: RecipeType;
  description: string;
  price: number;
  pieces: number;
  ingredients: Ingredient[] = [];
  // ingredients: OptionalIngredient[] = [];
  allergens: Allergen[] = [];
  png: string;

  constructor(id: number,
              code: string,
              name: string,
              type: RecipeType,
              description: string,
              price: number,
              pieces: number,
              ingredients: number[],
              // optionalIngredients: number[],
              allergens: number[],
              alternativeCode: string = null) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    ingredients.forEach((ingredient: number) => {
      this.ingredients.push(INGREDIENTS[ingredient]);
      // this.ingredients.push(new OptionalIngredient(INGREDIENTS[ingredient]));
    });
    // optionalIngredients.forEach((ingredient: number) => {
    //   this.ingredients.push(new OptionalIngredient(INGREDIENTS[ingredient], true));
    // });
    this.ingredients.sort((a: Ingredient, b: Ingredient) => {
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
