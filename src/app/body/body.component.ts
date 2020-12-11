import { Component, HostListener, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../_models/order';
import { Recipe } from '../_models/recipe';
import { RecipeType } from '../_models/recipe-type';
import { RECIPES } from '../_models/mocks/mock-recipes';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input()
  type: RecipeType;

  cookieId: number = null;
  recipes: Recipe[] = RECIPES;
  orders: Order[] = [];

  constructor(private cookieService: CookieService) { }

  @HostListener('window:beforeunload')
  unloadHandler(): boolean {
    return this.orders.length === 0;
  }

  updateOrder(order: Order): void {
    let inserted = false;
    this.orders.forEach((element: Order) => {
      if (!inserted && element.updateQty(order)) {
        inserted = true;
      }
    });
    if (!inserted) {
      this.orders.push(order);
    }
    this.sortOrderArray();
    this.checkCookiePermission();
  }

  updateOrders(orders: Order[]): void {
    this.orders = orders;
    this.sortOrderArray();
    this.checkCookiePermission();
  }

  private sortOrderArray(): void {
    this.orders.sort(Order.sort);
  }

  private checkCookiePermission(): boolean {
    if (!this.cookieId) {
      if (this.cookieService.check('wpcc')) {
        if (!this.cookieService.check('id')) {
          const rand = Math.floor((Math.random() * Number.MAX_SAFE_INTEGER));
          this.cookieService.set('id', rand.toString(16), 1);
        }
      }
      this.cookieId = Number.parseInt(this.cookieService.get('id'), 16);
      return true;
    }
    return false;
  }
}
