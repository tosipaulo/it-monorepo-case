import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense.model';
import { ExpenseService } from './../../services/expense/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  listExpense: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.storeExpense$
      .subscribe(expenseResponse => {
        if(!expenseResponse.length) {
          this.expenseService.get().subscribe(_expense => {
            if(_expense.length) {
              this.expenseService.storeExpense = _expense;
            }else {
              this.listExpense = [];
            }
          })
        }else {
          this.listExpense = expenseResponse;
        }
      });
  }

}
