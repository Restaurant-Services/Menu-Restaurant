import {Ingredient} from './ingredient';

export class OptionalIngredient {
  ingredient: Ingredient;
  optional: boolean;

  constructor(ingredient: Ingredient, optional: boolean = false) {
    this.ingredient = ingredient;
    this.optional = optional;
  }
}
