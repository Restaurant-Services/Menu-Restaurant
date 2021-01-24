import { Component, OnInit } from '@angular/core';
import { Promo, Style } from '../_models/promo';
import { PROMOS } from '../_models/_mocks/mock-promos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  promos: Promo[] = PROMOS;

  constructor() { }

  ngOnInit(): void {
  }

}
