import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {RecipeType} from '../shared/recipe-type';
import {RECIPE_TYPES} from '../shared/mock/mock-recipe-type';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  readonly recipeTypes: RecipeType[] = RECIPE_TYPES;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    for (const type of this.recipeTypes) {
      this.matIconRegistry.addSvgIcon(
        type.svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(type.getSVGPathFromComponent())
      );
    }
  }
}
