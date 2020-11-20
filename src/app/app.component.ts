import {Component} from '@angular/core';
import {Recipe} from './shared/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  summary: Recipe[] = [];
}
