import { Component, Input } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RecipeType } from '../shared/recipe-type';
import { EXTRA_SECTIONS } from '../shared/mock/mock-recipe-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly sections: RecipeType[] = EXTRA_SECTIONS;
  selectedSectionID = 0;

  @Input()
  sidenavComponent: SidenavComponent;

  showHideMenu(): void {
    this.sidenavComponent.expandReduceNav();
  }

  showCredits(): void {
    this.selectedSectionID = 0;
    this.shows();
  }

  showSummary(): void {
    this.selectedSectionID = 1;
    this.shows();
  }

  private shows(): void {
    this.sidenavComponent.expandReduceNav(false);
    this.sidenavComponent.changeRecipeType(this.sections[this.selectedSectionID]);
  }
}
