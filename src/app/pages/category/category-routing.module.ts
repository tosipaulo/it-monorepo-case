import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'adicionar',
        component: CreateCategoryComponent
      },
      {
        path: 'editar/:id',
        component: EditCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
