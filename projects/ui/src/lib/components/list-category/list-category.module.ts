import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category.component';



@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListCategoryComponent
  ]
})
export class ListCategoryModule { }
