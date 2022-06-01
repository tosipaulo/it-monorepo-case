import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ContainerModule, TitleModule, InputModule } from 'ui';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ContainerModule,
    TitleModule,
    InputModule,
    ReactiveFormsModule
  ],
  exports: [
    CategoryComponent
  ],
})
export class CategoryModule { }
