import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {RecipeType} from '../shared/recipe-type';
import {RECIPE_TYPES} from '../shared/mock/mock-recipe-types';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  readonly recipeTypes: RecipeType[] = RECIPE_TYPES.sort((a, b) => {
    return a.id - b.id;
  });

  @Input()
  showSubmenu: boolean;
  @Input()
  headerComponent: HeaderComponent;

  body: RecipeType;
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

  ngOnInit(): void {
    this.body = this.headerComponent.sections[this.headerComponent.selectedType];
  }

  mouseenter(): void {
    this.isShowing = true;
  }

  mouseleave(): void {
    this.isShowing = false;
  }

  // showMatrix(id: number): void {
  //   this.changeRecipeType(this.recipeTypes[id]);
  // }

  public changeRecipeType(type: RecipeType): void {
    console.log(`New body: ${JSON.stringify(type)}`);
    this.body = type;
  }

  public expandReduceNav(expand: boolean = !this.isExpanded): void {
    this.isExpanded = expand;
  }
}
