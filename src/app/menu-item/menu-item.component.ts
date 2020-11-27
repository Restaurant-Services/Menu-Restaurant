import { Component, Input } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input()
  menuItem: Recipe;

  @Input()
  qty = 0;

  plus1(): void {
    this.qty += 1;
  }

  minus1(): void {
    if (this.qty > 0) {
      this.qty -= 1;
    }
  }
}
