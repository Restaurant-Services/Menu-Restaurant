import { Component, HostListener, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  cookieId: number = null;
  recipes: Recipe[] = RECIPES;
  orders: Order[] = [];

  constructor(private cookieService: CookieService) { }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler($event: Event): any {
    const message = `Attenzione, aggiornando o chiudendo la pagina perderai l'ordine`;
    $event.preventDefault();
    $event.returnValue = false;
    return message;
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
