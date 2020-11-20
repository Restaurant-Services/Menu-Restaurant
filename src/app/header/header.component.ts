import { Component, Input } from '@angular/core';
import { RecipeType } from '../shared/recipe-type';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { EXTRA_SECTIONS } from '../shared/mock/mock-recipe-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly sections: RecipeType[] = EXTRA_SECTIONS.sort((a, b) => {
    return a.id - b.id;
  });
  selectedType = 0;

  @Input()
  sidenavComponent: SidenavComponent;

  showHideMenu(): void {
    this.sidenavComponent.expandReduceNav();
  }

  showCredits(): void {
    this.selectedType = 0;
    this.shows();
  }

  showSummary(): void {
    this.selectedType = 1;
    this.shows();
  }

  private shows(): void {
    this.sidenavComponent.expandReduceNav(false);
    this.sidenavComponent.changeRecipeType(this.sections[this.selectedType]);
  }
}
