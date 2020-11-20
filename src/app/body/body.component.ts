import {Component, Input, OnInit} from '@angular/core';
import {RecipeType} from '../shared/recipe-type';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input()
  recipeType: RecipeType;

  constructor() { }
}
