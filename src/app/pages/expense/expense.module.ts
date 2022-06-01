import { SelectModule } from './../../../../projects/ui/src/lib/components/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ButtonModule, ContainerModule, InputModule, TitleModule } from 'ui';
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
    ExpenseRoutingModule,
    ContainerModule,
    TitleModule,
    InputModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule
  ],
  exports: [ExpenseComponent]
})
export class ExpenseModule { }
