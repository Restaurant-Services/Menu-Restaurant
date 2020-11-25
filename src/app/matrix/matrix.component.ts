import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipeType } from '../shared/recipe-type';

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

  innerWidth = 1050;

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
  }
}
