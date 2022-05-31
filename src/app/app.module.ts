import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TitleModule, ListCategoryModule } from 'ui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    TitleModule,
    ListCategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
