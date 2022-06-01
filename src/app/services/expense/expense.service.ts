import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from 'src/app/model/expense.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseSubject: BehaviorSubject<Expense[]> = new BehaviorSubject<Expense[]>([]);
  

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Expense[]>(`${environment.api}/lancamento`);
  }

  // getById(id: string) {
  //   return this.http.get<Category>(`${environment.api}/categoria/${id}`);
  // }

  // save(category: Category) {
  //   return this.http.post<Category>(`${environment.api}/categoria`, category);
  // }

  // update(category: Category) {
  //   const { id, name } = category
  //   return this.http.put<Category>(`${environment.api}/categoria/${id}`, { name });
  // }

  // delete(id: string) {
  //   return this.http.delete(`${environment.api}/categoria/${id}`);
  // }

  get storeExpense$() {
    return this.expenseSubject.asObservable();
  }

  set storeExpense(value: Expense[]) {
    this.expenseSubject.next(value);
  }
}
