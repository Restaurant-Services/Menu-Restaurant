import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { RecipeType } from '../_models/recipe-type';
import { RECIPE_TYPES } from '../_models/_mocks/mock-recipe-types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  readonly recipeTypes: RecipeType[] = RECIPE_TYPES;

  @Input()
  headerComponent: HeaderComponent;

  selectedType: RecipeType = null;
  isExpanded = false;
  isShowing = false;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    for (const type of this.recipeTypes) {
      const svg: string = type.getSVGPathFromComponent();
      const safeUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(svg);
      this.matIconRegistry.addSvgIcon(type.svg, safeUrl);
    }
  }

  mouseenter(): void {
    this.isShowing = true;
  }

  mouseleave(): void {
    this.isShowing = false;
  }

  public changeRecipeType(type: RecipeType): void {
    if (!type.equals(this.selectedType)) {
      this.selectedType = type;
      this.reduceSidenav();
    }
  }

  public expandReduceNav(expand: boolean = !this.isExpanded): void {
    this.isExpanded = expand;
  }

  private reduceSidenav(): void {
    this.isExpanded = false;
    this.isShowing = false;
  }
}
