import { Expense } from 'src/app/model/expense.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { Category } from './../../../../model/category.model';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html'
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup;
  listCategoria: Category[];
  listExpense: Expense[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private expenseService: ExpenseService
    ) { }

  ngOnInit(): void {

    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategoria = _listCategory);

    this.expenseService.storeExpense$
      .subscribe(_listExpense => this.listExpense = _listExpense);

    this.form = this.fb.group({
      description: [''],
      idCategoria: [null],
      date: [''],
      value: ['']
    })
  }

  submit() {
    this.expenseService.save(this.form.value)
      .subscribe(_expenseRepnse => {
        this.expenseService.storeExpense = [_expenseRepnse, ...this.listExpense];
      });
  }
}
