import { Ingredient } from './ingredient';

export class OptionalIngredient {
  checked: boolean;
  ingredient: Ingredient;
  optional: boolean;

  constructor(ingredient: Ingredient, optional: boolean = false, checked: boolean = true) {
    this.ingredient = ingredient;
    this.optional = optional;
    this.checked = checked;
  }

  public static sort(a: OptionalIngredient, b: OptionalIngredient): number {
    let sort: number = Ingredient.sort(a.ingredient, b.ingredient);
    if (sort === 0) {
      sort = (a.optional ? 1 : 0) - (b.optional ? 1 : 0);
    }
    return sort;
  }

  private equalsPartial(compare: OptionalIngredient): boolean {
    return this.ingredient.equals(compare.ingredient);
  }

  private equalsComplete(compare: OptionalIngredient): boolean {
    return this.equalsPartial(compare) && this.checked === compare.checked;
  }

  public equals(compare: OptionalIngredient, checkedSensitive): boolean {
    return !checkedSensitive ? this.equalsPartial(compare) : this.equalsComplete(compare);
  }

  public clone(): OptionalIngredient {
    return new OptionalIngredient(this.ingredient, this.optional, this.checked);
  }
}
