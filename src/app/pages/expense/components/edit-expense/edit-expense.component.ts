import { Expense } from 'src/app/model/expense.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { Category } from './../../../../model/category.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  form: FormGroup;
  listCategory: Category[];
  listExpense: Expense[];
  idExpense: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private expenseService: ExpenseService,
    private router: Router,
    private activedRoute: ActivatedRoute 
    ) { 
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.idExpense = this.activedRoute.snapshot.params.id
          this.getExpenseById(this.idExpense);
        }
      });
    }

  ngOnInit(): void {

    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategory = _listCategory);

    this.expenseService.storeExpense$
      .subscribe(_listExpense => this.listExpense = _listExpense);

    this.form = this.fb.group({
      description: [''],
      idCategoria: [null],
      date: [''],
      value: ['']
    })
  }

  getExpenseById(idExpense: string) {
    this.expenseService.getById(idExpense)
      .subscribe(_expense => this.form.patchValue(_expense));
  }

  submit() {
    this.expenseService.update({id:this.idExpense, ...this.form.value})
        .subscribe(updateExpense => {
          this.expenseService.storeExpense = Object.assign(updateExpense, this.listExpense);
        })
  }

}
