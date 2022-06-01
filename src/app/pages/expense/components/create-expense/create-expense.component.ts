import { Expense } from 'src/app/model/expense.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html'
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup;
  listCategoria: Expense[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {

    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategoria = _listCategory);

    this.form = this.fb.group({
      description: [''],
      idCategoria: [null],
      date: [''],
      value: ['']
    })
  }

  submit() {
    console.log(this.form.value)
  }
}
