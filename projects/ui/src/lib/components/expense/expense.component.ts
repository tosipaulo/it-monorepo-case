import { Component, Input, OnInit } from '@angular/core';
import { Expense } from './model/expense.model';

@Component({
  selector: 'lib-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  @Input() listExpense: Expense[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
