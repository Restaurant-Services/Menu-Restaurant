import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalRecipeComponent } from '../modal/modal-recipe/modal-recipe.component';
import { Order } from '../shared/order';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css', '../menu-item/menu-item.component.css']
})
export class SummaryComponent implements OnInit {
  @Input()
  orderArray: Order[];
  @Output()
  orderEmit: EventEmitter<Order[]> = new EventEmitter();

  private modalDialogConfig: MatDialogConfig<Order> = {
    width: '30em',
    height: '35em',
    autoFocus: false
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cleanOrdersAfterSort();
    this.emit();
  }

  plus1(index: number): void {
    this.orderArray[index].quantity += 1;
    this.emit();
  }

  minus1(index: number): void {
    if (this.orderArray[index].quantity > 0) {
      this.orderArray[index].quantity -= 1;
    } else {
      this.orderArray.splice(index, 1);
    }
    this.emit();
  }

  openModalRecipeDialog(order: Order): void {
    this.modalDialogConfig.data = order;
    const modalDialogRef = this.dialog.open(ModalRecipeComponent, this.modalDialogConfig);
    modalDialogRef.afterClosed().subscribe((result: Order) => {
      if (result) {
        order.ingredients = result.ingredients;
        order.updateDescription();
        this.emit();
        if (order.description.length > 0) {
          this.orderArray.push(new Order(order.recipe));
          this.cleanOrdersAfterSort();
          this.emit();
        }
      }
    });
  }

  private cleanOrdersAfterSort(): void {
    for (let j = 0; j < this.orderArray.length; j++) {
      for (let k = j + 1; k < this.orderArray.length; k++) {
        if (this.orderArray[j].equals(this.orderArray[k], true)) {
          this.orderArray[j].quantity += this.orderArray[k].quantity;
          this.orderArray.splice(k, 1);
          k--;
        }
      }
    }
  }

  private emit(): void {
    this.orderEmit.emit(this.orderArray);
  }
}
