import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RecipeType } from '../shared/recipe-type';
import { RECIPE_TYPES } from '../shared/mock/mock-recipe-types';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  readonly recipeTypes: RecipeType[] = RECIPE_TYPES;

  @Input()
  showIcons = true;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    for (const type of this.recipeTypes) {
      const svg: string = type.getSVGPathFromComponent();
      const safeUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(svg);
      this.matIconRegistry.addSvgIcon(type.svg, safeUrl);
    }
  }
}
