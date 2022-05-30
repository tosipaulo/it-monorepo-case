import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleModule } from 'ui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
