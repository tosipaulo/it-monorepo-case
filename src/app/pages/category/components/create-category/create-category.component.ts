import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from '../../../../model/category.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup;
  listCategory: Category[];

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
    })
  }

  submit() {
    if(this.form.valid) {
      this.categoryService.save(this.form.value)
        .subscribe(categoryResponse => {
          this.categoryService.storeCategory = [categoryResponse, ...this.listCategory];
          this.form.reset();
          this.openAlert();
        });
    }
  }

  openAlert() {
    Swal.fire({
      title: 'Adicionado!!!',
      text: "Sua categoria foi adicionada com sucesso.",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Voltar para lista',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/'])
      }
    })
  }

}
