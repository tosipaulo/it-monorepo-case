import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ExpenseComponent } from './expense.component';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExpenseComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class ExpenseModule { }
