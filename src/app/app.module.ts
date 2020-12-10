import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CreditsComponent } from './credits/credits.component';
import { HttpClientModule } from '@angular/common/http';
import { MatrixComponent } from './matrix/matrix.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MatCardModule } from '@angular/material/card';
import { SummaryComponent } from './summary/summary.component';
import { ModalModule } from './modal/modal.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    CreditsComponent,
    MatrixComponent,
    MenuItemComponent,
    SummaryComponent
  ],
  imports: [
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
