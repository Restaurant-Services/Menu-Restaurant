import { OptionalIngredient } from './optional-ingredient';
import { Recipe } from './recipe';

export class Order {
  recipe: Recipe;
  quantity: number;
  description: string;
  ingredients: OptionalIngredient[];

  constructor(recipe: Recipe,
              quantity: number = 0,
              description: string = '',
              optionalIngredients: OptionalIngredient[] = recipe.optionalIngredients) {
    this.recipe = recipe;
    this.quantity = quantity;
    this.description = description;
    this.ingredients = optionalIngredients.sort(OptionalIngredient.sort);
  }

  public static sort(a: Order, b: Order): number {
    let sort: number = Recipe.sort(a.recipe, b.recipe);
    if (sort === 0) {
      sort = a.ingredients.length - b.ingredients.length;
      if (sort === 0) {
        for (let i = 0; i < a.ingredients.length; i++) {
          sort = OptionalIngredient.sort(a.ingredients[i], b.ingredients[i]);
          if (sort !== 0) {
            break;
          }
        }
        if (sort === 0) {
          sort = a.description.length === 0 ? 1 : 0;
          sort -= b.description.length === 0 ? 0 : 1;
          if (sort === 0) {
            sort = a.description.localeCompare(b.description);
          }
        }
      }
    }
    return sort;
  }

  public updateDescription(): void {
    this.description = '';
    this.ingredients.forEach((optIngr: OptionalIngredient, index: number) => {
      if (!optIngr.equals(this.recipe.optionalIngredients[index], true)) {
        this.description += ', ';
        this.description += optIngr.checked ? 'CON ' : 'NO ';
        this.description += optIngr.ingredient.noteName;
      }
    });
    this.description = this.description.substr(2);
  }

  public updateQty(order: Order): boolean {
    if (this.equals(order, true)) {
      this.quantity += order.quantity;
      if (this.quantity > 0) {
        return true;
      }
      this.quantity -= order.quantity;
    }
    return false;
  }

  public equals(order: Order, checkedSensitive: boolean): boolean {
    if (!this.recipe.equals(order.recipe)) {
      return false;
    }
    if (this.ingredients.length !== order.ingredients.length) {
      return false;
    }
    this.ingredients.forEach((ingredient: OptionalIngredient, index: number) => {
      if (!ingredient.equals(order.ingredients[index], checkedSensitive)) {
        return false;
      }
    });
    return true;
  }

  public clone(): Order {
    const order: Order = new Order(this.recipe, this.quantity, this.description, []);
    this.ingredients.forEach((optIngredient: OptionalIngredient) => {
      order.ingredients.push(optIngredient.clone());
    });
    return order;
  }
}
