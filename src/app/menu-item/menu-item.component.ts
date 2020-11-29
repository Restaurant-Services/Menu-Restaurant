import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Order } from '../shared/order';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input()
  menuItem: Recipe;

  @Input()
  qty: number;

  @Output()
  ordering: EventEmitter<Order> = new EventEmitter();

  plus1(): void {
    this.emit(new Order(this.menuItem, 1));
  }

  minus1(): void {
    if (this.qty > 0) {
      this.emit(new Order(this.menuItem, -1));
    }
  }

  private emit(order: Order): void {
    this.ordering.emit(order);
  }
}
