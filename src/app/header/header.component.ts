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
  selectedSectionID = 1;
  topRightHeader: string;

  @Input()
  sidenavComponent: SidenavComponent;

  constructor() {
    this.setTopRight();
  }

  showHideMenu(): void {
    this.sidenavComponent.expandReduceNav();
  }

  showCreditsOrCookies(): void {
    if (this.selectedSectionID > 0) {
      this.selectedSectionID = 0;
      this.setTopRight(true);
    } else {
      this.selectedSectionID = 1;
      this.setTopRight();
    }
    this.shows();
  }

  showSummary(): void {
    this.selectedSectionID = 2;
    this.shows();
  }

  public setTopRight(cookie: boolean = false): void {
    this.topRightHeader = cookie ? 'COOKIES' : 'CREDITS';
    console.log(this.selectedSectionID);
  }

  private shows(): void {
    this.sidenavComponent.expandReduceNav(false);
    this.sidenavComponent.changeRecipeType(this.sections[this.selectedSectionID]);
  }
}
