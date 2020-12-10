import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalRecipeComponent } from './modal-recipe/modal-recipe.component';
import { ModalOrderComponent } from './modal-order/modal-order.component';

@NgModule({
  declarations: [
    ModalRecipeComponent,
    ModalOrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ModalModule {}
