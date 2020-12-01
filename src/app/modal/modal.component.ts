import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Allergen } from '../shared/allergen';
import { Ingredient } from '../shared/ingredient';
import { Order } from '../shared/order';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  order: Order;
  allergens: Allergen[] = [];

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Recipe) {
    this.order = new Order(data);
    this.getAllAllergens();
    this.removeExtraAllergens();
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.order);
  }

  private getAllAllergens(): void {
    this.order.recipe.allergens.forEach((value: Allergen) => {
      this.allergens.push(value);
    });
    this.order.ingredients.forEach((value: Ingredient) => {
      value.allergens.forEach((sub: Allergen) => {
        this.allergens.push(sub);
      });
    });
  }

  private removeExtraAllergens(): void {
    this.allergens.sort(Allergen.sort);
    for (let i = 1; i < this.allergens.length; i++) {
      if (this.allergens[i - 1].equals(this.allergens[i])) {
        this.allergens.splice(i, 1);
        i--;
      }
    }
  }
}
