import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../../_models/order';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['../styles.css', './modal-order.component.css']
})
export class ModalOrderComponent {
  orders: Order[] = [];

  constructor(public dialogRef: MatDialogRef<ModalOrderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Order[]) {
    data.forEach((order: Order) => {
      if (order.quantity > 0) {
        this.orders.push(order.clone());
      }
    });
    this.orders.sort(Order.sort);
  }

  close(): void {
    this.dialogRef.close();
  }
}
