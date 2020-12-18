import { OptionalIngredient } from './optional-ingredient';
import { Recipe } from './recipe';

export class Order {
  recipe: Recipe;
  quantity: number;
  ingredients: OptionalIngredient[];
  description: string;
  price: number;

  constructor(recipe: Recipe,
              quantity: number = 0,
              optionalIngredients: OptionalIngredient[] = recipe.ingredients) {
    this.recipe = recipe;
    this.quantity = quantity;
    this.ingredients = optionalIngredients.sort(OptionalIngredient.sort);
    this.updateDescription();
  }

  public static sort(a: Order, b: Order): number {
    let sort: number = Recipe.sort(a.recipe, b.recipe);
    if (sort === 0) {
      sort = b.description.length - a.description.length;
      if (sort === 0) {
        sort = b.description.localeCompare(a.description);
      }
    }
    return sort;
  }

  public updateDescription(): void {
    this.description = '';
    this.resetPrice();
    this.ingredients.forEach((optIngr: OptionalIngredient, index: number) => {
      if (!optIngr.equals(this.recipe.ingredients[index], true)) {
        this.description += ', ';
        this.description += optIngr.checked ? 'CON ' : 'NO ';
        this.description += optIngr.ingredient.noteName;
        // EXTRA INGREDIENTS are expensive, remove ingredients doesn't make the recipe cheaper
        if (optIngr.checked) {
          this.price += optIngr.ingredient.price;
        }
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

  private resetPrice(): void {
    this.price = this.recipe.price;
  }

  public equals(compare: Order, checkedSensitive: boolean): boolean {
    if (!compare) {
      return false;
    }
    let equal = true;
    if (!this.recipe.equals(compare.recipe)) {
      return false;
    }
    this.ingredients.forEach((ingredient: OptionalIngredient, index: number) => {
      if (equal && !ingredient.equals(compare.ingredients[index], checkedSensitive)) {
        equal = false;
      }
    });
    return equal;
  }

  public clone(): Order {
    const order: Order = new Order(this.recipe, this.quantity, []);
    this.ingredients.forEach((optIngredient: OptionalIngredient) => {
      order.ingredients.push(optIngredient.clone());
    });
    order.updateDescription();
    return order;
  }
}
