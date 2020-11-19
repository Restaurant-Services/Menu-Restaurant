import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {RecipeType} from '../shared/recipe-type';
import {RECIPE_TYPES} from '../shared/mock/mock-recipe-type';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  readonly recipeTypes: RecipeType[] = RECIPE_TYPES;

  showSubmenu = false;
  isExpanded = false;
  isShowing = false;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    for (const type of this.recipeTypes) {
      this.matIconRegistry.addSvgIcon(
        type.svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(type.getSVGPathFromComponent())
      );
    }
  }

  mouseenter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  mouseleave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
