import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { TitleModule, ExpenseModule, ContainerModule } from 'ui';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule,
    ExpenseModule,
    ContainerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
