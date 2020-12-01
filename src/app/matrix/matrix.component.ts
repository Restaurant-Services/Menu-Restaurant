import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipeType } from '../shared/recipe-type';
import { SummaryComponent } from '../summary/summary.component';
import { Order } from '../shared/order';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input()
  recipes: Recipe[];
  @Input()
  selectedRecipeType: RecipeType;
  @Input()
  summaryComponent: SummaryComponent;
  @Input()
  orderArray: Order[];
  @Output()
  ordering: EventEmitter<Order> = new EventEmitter();

  innerWidth = 1050;
  recipesPerType = 0;

  ngOnInit(): void {
    this.onResize();
    this.recipesPerSelectedType();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  private recipesPerSelectedType(): void {
    this.recipes.forEach((recipe: Recipe) => {
      if (this.selectedRecipeType.equals(recipe.type)) {
        this.recipesPerType++;
      }
    });
  }

  getTotQty(recipe: Recipe): number {
    let tot = 0;
    this.orderArray.forEach((order: Order) => {
      if (recipe.equals(order.recipe)) {
        tot += order.quantity;
      }
    });
    return tot;
  }

  reEmit(emitPayload: Order): void {
    this.ordering.emit(emitPayload);
  }
}
