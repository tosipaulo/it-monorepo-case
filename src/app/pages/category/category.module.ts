import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  ContainerModule, 
  TitleModule, 
  InputModule,
  ButtonModule
} from 'ui';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ContainerModule,
    TitleModule,
    InputModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
