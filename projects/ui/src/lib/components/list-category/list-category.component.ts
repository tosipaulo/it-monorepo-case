import { Category } from './model/category.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  @Input() category: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
