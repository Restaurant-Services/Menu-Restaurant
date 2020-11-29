import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

export class Order {
  recipe: Recipe;
  quantity: number;
  description: string;
  ingredients: Ingredient[];

  constructor(recipe: Recipe,
              quantity: number = 0,
              description: string = '',
              ingredients: Ingredient[] = recipe.ingredients) {
    this.recipe = recipe;
    this.quantity = quantity;
    this.description = description;
    this.ingredients = ingredients.sort((a: Ingredient, b: Ingredient) => {
      return a.id - b.id;
    });
  }

  public updateQty(order: Order, descrSensitive: boolean): boolean {
    if (this.equals(order, descrSensitive)) {
      if (this.quantity > 0) {
        this.quantity += order.quantity;
        return true;
      }
    }
    return false;
  }

  equals(order: Order, descrSensitive: boolean): boolean {
    if (!this.recipe.equals(order.recipe)) {
      return false;
    }
    if (descrSensitive && this.description !== order.description) {
      return false;
    }
    if (this.ingredients.length !== order.ingredients.length) {
      return false;
    }
    this.ingredients.forEach((ingredient: Ingredient, index: number) => {
      const comp = order.ingredients[index];
      if (ingredient.id !== comp.id || ingredient.name !== comp.name) {
        return false;
      }
    });
    return true;
  }
}
