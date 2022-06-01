import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';



@NgModule({
  declarations: [
    ExpenseComponent,
    CreateExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ],
  exports: [ExpenseComponent]
})
export class ExpenseModule { }
