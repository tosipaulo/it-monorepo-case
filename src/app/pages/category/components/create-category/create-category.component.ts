import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from '../../../../model/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup;
  listCategory: Category[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { 
    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategory = _listCategory);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }

  submit() {
    if(this.form.valid) {
      this.categoryService.save(this.form.value)
        .subscribe(categoryResponse => {
          this.categoryService.storeCategory = [categoryResponse, ...this.listCategory];
          this.form.reset();
        });
    }
  }

}
