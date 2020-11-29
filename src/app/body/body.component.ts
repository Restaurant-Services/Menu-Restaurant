import { Component, Input } from '@angular/core';
import { RecipeType } from '../shared/recipe-type';
import { RECIPES } from '../shared/mock/mock-recipes';
import { Recipe } from '../shared/recipe';
import { Order } from '../shared/order';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input()
  recipeType: RecipeType;

  recipes: Recipe[] = RECIPES;
  orderArray: Order[] = [];

  updateOrder(order: Order): void {
    let inserted = false;
    this.orderArray.forEach((element: Order) => {
      if (!inserted && element.updateQty(order, true)) {
        inserted = true;
      }
    });
    if (!inserted) {
      this.orderArray.push(order);
    }
    this.sortOrderArray();
  }

  updateOrders(orders: Order[]): void {
    this.orderArray = orders;
    this.sortOrderArray();
  }

  private sortOrderArray(): void {
    this.orderArray.sort((a: Order, b: Order) => {
      if (!a.recipe.equals(b.recipe)) {
        return a.recipe.id - b.recipe.id;
      }
      if (a.ingredients.length !== b.ingredients.length) {
        return b.ingredients.length - a.ingredients.length;
      }
      return b.description.length - a.description.length;
    });
  }
}
