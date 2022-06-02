import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent implements OnInit {

  form: FormGroup;
  listCategory: Category[];
  idCategory: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private activedRoute: ActivatedRoute 
  ) { 
    this.categoryService.storeCategory$
      .subscribe(_listCategory => this.listCategory = _listCategory);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.idCategory = this.activedRoute.snapshot.params.id
          this.getCategoryById(this.idCategory);
        }
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });    
  }

  getCategoryById(idCategory: string) {
    this.categoryService.getById(idCategory)
      .subscribe(category => this.form.controls['name'].setValue(category.name));
  }

  submit() {
    const { name } = this.form.value;
    this.categoryService.update({
      id: this.idCategory,
      name
    }).subscribe(updateCategory => {
      this.categoryService.storeCategory = Object.assign(updateCategory, this.listCategory);
      this.openAlert();
    })
  }

  openAlert() {
    Swal.fire({
      title: 'Adicionado!!!',
      text: "Sua categoria foi atualizada com sucesso.",
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
