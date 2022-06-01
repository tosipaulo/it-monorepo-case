import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../model/category.model';
import { CategoryService } from './../../services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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
          console.log('deu boa', categoryResponse);
          this.categoryService.storeCategory = [categoryResponse, ...this.listCategory]
        });
    }
  }

}
