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
              optionalIngredients: Ingredient[] = recipe.optionalIngredients) {
    this.recipe = recipe;
    this.quantity = quantity;
    this.description = description;
    this.ingredients = optionalIngredients.sort(Ingredient.sort);
  }

  public static sort(a: Order, b: Order): number {
    let sort: number = Recipe.sort(a.recipe, b.recipe);
    if (sort === 0) {
      sort = a.ingredients.length - b.ingredients.length;
      if (sort === 0) {
        for (let i = 0; i < a.ingredients.length; i++) {
          sort = Ingredient.sort(a.ingredients[i], b.ingredients[i]);
          if (sort !== 0) {
            break;
          }
        }
        if (sort === 0) {
          sort = a.description.localeCompare(b.description);
        }
      }
    }
    return sort;
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
