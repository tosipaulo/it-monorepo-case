import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { Category } from './../../../../model/category.model';

import Swal from 'sweetalert2';

const ALERT_SUCCESS = {
  title: 'Adicionado!!!',
  text: "Seu gasto foi adicionado com sucesso.",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Voltar para lista',
}

const ALERT_ERROR = {
  title: 'Ops!!!',
  text: "Verifique se todos os campos estão preenchido.",
  icon: 'error',
  confirmButtonColor: '#3085d6',
}
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
    private expenseService: ExpenseService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategoria = _listCategory);

    this.expenseService.storeExpense$
      .subscribe(_listExpense => this.listExpense = _listExpense);

    this.form = this.fb.group({
      description: ['', Validators.required],
      idCategoria: [null],
      date: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  submit() {
    if(this.form.valid) {
      this.expenseService.save(this.form.value)
      .subscribe(
        _expenseRepnse => {
          this.expenseService.storeExpense = [_expenseRepnse, ...this.listExpense];
          this.openAlert(ALERT_SUCCESS, () => {
            this.router.navigate(['/'])
          });
        },
        error => {
          this.openAlert(ALERT_ERROR)
        }
      );
    }
  }

  openAlert(configAlert: any, fn?: () => void) {
    Swal.fire(configAlert).then((result) => {
      if (result.isConfirmed && fn) {
        fn();
      }
    })
  }
}
