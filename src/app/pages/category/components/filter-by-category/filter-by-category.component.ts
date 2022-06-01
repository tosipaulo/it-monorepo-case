import { ExpenseService } from './../../../../services/expense/expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Expense } from 'src/app/model/expense.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html'
})
export class FilterByCategoryComponent implements OnInit {

  listExpense: Expense[];
  filterListExpense: Expense[];
  idCategory: string;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private activedRoute: ActivatedRoute 
  ) { 
    this.expenseService.storeExpense$
      .subscribe(_listExpense => this.listExpense = _listExpense);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.idCategory = this.activedRoute.snapshot.params.id;
          this.filterById(this.idCategory);
        }
      });
  }

  ngOnInit(): void {
  }

  filterById(idCategory: string) {
    console.log(idCategory, this.listExpense);
    this.filterListExpense = this.listExpense.filter(expense => expense.idCategoria === idCategory);
  }

}
