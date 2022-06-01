import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent,
    children: [
      {
        path: 'adicionar',
        component: CreateExpenseComponent
      },
      {
        path: 'editar/:id',
        component: EditExpenseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
