import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalRecipeComponent } from '../modal/modal-recipe/modal-recipe.component';
import { Order } from '../_models/order';
import { Recipe } from '../_models/recipe';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem: Recipe;
  @Input()
  qty: number;
  @Output()
  ordering: EventEmitter<Order> = new EventEmitter();

  private modalDialogConfig: MatDialogConfig<Recipe> = {
    width: '30em',
    height: '35em',
    autoFocus: false
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.modalDialogConfig.data = this.menuItem;
  }

  plus1(): void {
    this.emit(new Order(this.menuItem, 1));
  }

  minus1(): void {
    if (this.qty > 0) {
      this.emit(new Order(this.menuItem, -1));
    }
  }

  openModalDialog(): void {
    this.dialog.open(ModalRecipeComponent, this.modalDialogConfig);
  }

  private emit(order: Order): void {
    this.ordering.emit(order);
  }
}
