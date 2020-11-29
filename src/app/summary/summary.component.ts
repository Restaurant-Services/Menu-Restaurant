import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  ngOnInit(): void {
    for (let j = 0; j < this.orderArray.length; j++) {
      for (let k = j + 1; k < this.orderArray.length; k++) {
        if (this.orderArray[j].equals(this.orderArray[k], true)) {
          this.orderArray[j].quantity += this.orderArray[k].quantity;
          this.orderArray.splice(k, 1);
          k--;
        }
      }
    }
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

  note(note: string, index: number): void {
    this.orderArray[index].description = note;
    const order: Order = new Order(this.orderArray[index].recipe);
    let nopush = false;
    this.orderArray.forEach((element: Order) => {
      if (element.equals(order, true)) {
        nopush = true;
        return;
      }
    });
    if (!nopush) {
      this.orderArray.push(order);
    }
    this.emit();
  }

  private emit(): void {
    this.orderEmit.emit(this.orderArray);
  }
}
