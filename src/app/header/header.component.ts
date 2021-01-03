import { Component, Input } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RecipeType } from '../_models/recipe-type';
import { EXTRA_SECTIONS } from '../_models/_mocks/mock-recipe-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly sections: RecipeType[] = EXTRA_SECTIONS;
  selectedSectionID = 1;
  innerWidth: number;

  @Input()
  sidenavComponent: SidenavComponent;

  showHideMenu(): void {
    this.sidenavComponent.expandReduceNav();
  }

  showCreditsOrCookies(): void {
    if (this.selectedSectionID > 0) {
      this.selectedSectionID = 0;
    } else {
      this.selectedSectionID = 1;
    }
    this.shows();
  }

  showSummary(): void {
    this.selectedSectionID = 2;
    this.shows();
  }

  private shows(): void {
    this.sidenavComponent.expandReduceNav(false);
    this.sidenavComponent.changeRecipeType(this.sections[this.selectedSectionID]);
  }
}
