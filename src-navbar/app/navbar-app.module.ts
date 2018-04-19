import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarAppComponent } from './navbar-app.component';

@NgModule({
  declarations: [
    NavbarAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NavbarAppComponent]
})
export class NavbarAppModule { }
