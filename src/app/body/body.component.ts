import { Component, Input } from '@angular/core';
import { Order } from '../shared/order';
import { Recipe } from '../shared/recipe';
import { RecipeType } from '../shared/recipe-type';
import { RECIPES } from '../shared/mock/mock-recipes';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input()
  type: RecipeType;

  recipes: Recipe[] = RECIPES;
  orders: Order[] = [];

  updateOrder(order: Order): void {
    let inserted = false;
    this.orders.forEach((element: Order) => {
      if (!inserted && element.updateQty(order, true)) {
        inserted = true;
      }
    });
    if (!inserted) {
      this.orders.push(order);
    }
    this.sortOrderArray();
  }

  updateOrders(orders: Order[]): void {
    this.orders = orders;
    this.sortOrderArray();
  }

  private sortOrderArray(): void {
    this.orders.sort(Order.sort);
  }
}
