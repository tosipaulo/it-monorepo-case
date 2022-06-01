import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  ContainerModule, 
  TitleModule, 
  InputModule,
  ButtonModule,
  ExpenseModule
} from 'ui';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { FilterByCategoryComponent } from './components/filter-by-category/filter-by-category.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    FilterByCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ContainerModule,
    TitleModule,
    InputModule,
    ReactiveFormsModule,
    ButtonModule,
    ExpenseModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
