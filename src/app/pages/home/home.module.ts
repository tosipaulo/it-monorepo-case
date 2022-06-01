import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { TitleModule, ExpenseModule } from 'ui';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule,
    ExpenseModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
