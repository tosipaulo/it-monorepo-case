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

  save(expense: Expense) {
    return this.http.post<Expense>(`${environment.api}/lancamento`, expense);
  }

  getById(id: string) {
    return this.http.get<Expense>(`${environment.api}/lancamento/${id}`);
  }

  update(expense: Expense) {
    return this.http.put<Expense>(`${environment.api}/lancamento/${expense?.id}`, expense);
  }

  get storeExpense$() {
    return this.expenseSubject.asObservable();
  }

  set storeExpense(value: Expense[]) {
    this.expenseSubject.next(value);
  }
}
