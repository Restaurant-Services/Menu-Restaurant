import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Allergen } from '../shared/allergen';
import { OptionalIngredient } from '../shared/optional-ingredient';
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
              @Inject(MAT_DIALOG_DATA) public data: Recipe | Order) {
    this.order = data instanceof Recipe ? new Order(data) : data;
    this.updateAllergensList();
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.order);
  }

  updateAllergensList(optIngr?: OptionalIngredient): void {
    if (optIngr) {
      optIngr.checked = !optIngr.checked;
    }
    this.resetAllergens();
    this.popolateAllergens();
    this.sortAllergens();
    this.removeExtraAllergens();
  }

  private resetAllergens(): void {
    this.allergens = [];
  }

  private popolateAllergens(): void {
    this.allergens = [];
    this.order.recipe.allergens.forEach((value: Allergen) => {
      this.allergens.push(value);
    });
    this.order.ingredients.forEach((value: OptionalIngredient) => {
      if (value.checked) {
        value.ingredient.allergens.forEach((sub: Allergen) => {
          this.allergens.push(sub);
        });
      }
    });
  }

  private sortAllergens(): void {
    this.allergens.sort(Allergen.sort);
  }

  private removeExtraAllergens(): void {
    for (let i = 1; i < this.allergens.length; i++) {
      if (this.allergens[i - 1].equals(this.allergens[i])) {
        this.allergens.splice(i, 1);
        i--;
      }
    }
  }
}
