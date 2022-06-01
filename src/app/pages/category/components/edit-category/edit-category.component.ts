import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent implements OnInit {

  form: FormGroup;
  listCategory: Category[];
  category: Category;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) { 
    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategory = _listCategory);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.category = this.router.getCurrentNavigation().extras.state;
          this.form.patchValue({name: this.category.name});
      }
    });
  }

  submit() {
    console.log(this.form.value)
  }

}
