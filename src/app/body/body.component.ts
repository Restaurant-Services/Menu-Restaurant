import { Component, Input } from '@angular/core';
import { RecipeType } from '../shared/recipe-type';
import { RECIPES } from '../shared/mock/mock-recipes';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input()
  recipeType: RecipeType;

  recipes: Recipe[] = RECIPES;
}
