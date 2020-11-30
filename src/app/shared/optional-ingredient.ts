import { Ingredient } from './ingredient';

export class OptionalIngredient {
  ingredient: Ingredient;
  optional: boolean;

  constructor(ingredient: Ingredient, optional: boolean = false) {
    this.ingredient = ingredient;
    this.optional = optional;
  }

  public static sort(a: OptionalIngredient, b: OptionalIngredient): number {
    let sort: number = Ingredient.sort(a.ingredient, b.ingredient);
    if (sort === 0) {
      sort = (a.optional ? 1 : 0) - (b.optional ? 1 : 0);
    }
    return sort;
  }

  public equalsPartial(compare: OptionalIngredient): boolean {
    return this.ingredient.equals(compare.ingredient);
  }

  public equalsComplete(compare: OptionalIngredient): boolean {
    return this.equalsPartial(compare) && this.optional === compare.optional;
  }
}
