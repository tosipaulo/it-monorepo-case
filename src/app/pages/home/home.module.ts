import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { TitleModule } from 'ui';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
