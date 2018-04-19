import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PortalAppComponent } from './portal-app.component';

@NgModule({
  declarations: [
    PortalAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PortalAppComponent]
})
export class PortalAppModule { }
