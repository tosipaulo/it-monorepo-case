import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../model/category.model';
import { CategoryService } from './../../services/category/category.service';

@Component({
  selector: 'app-category',
  template: '<router-outlet></router-outlet>'
})
export class CategoryComponent {}
