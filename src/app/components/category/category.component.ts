import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.category$ = this.categoryService.getCategory();
  }

}
