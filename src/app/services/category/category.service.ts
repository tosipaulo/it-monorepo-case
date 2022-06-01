import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../../model/category.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categorySubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Category[]>(`${environment.api}/categoria`);
  }

  getById(id: string) {
    return this.http.get<Category>(`${environment.api}/categoria/${id}`);
  }

  save(category: Category) {
    return this.http.post<Category>(`${environment.api}/categoria`, category);
  }

  update(category: Category) {
    const { id, name } = category
    return this.http.put<Category>(`${environment.api}/categoria/${id}`, { name });
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/categoria/${id}`);
  }

  get storeCategory$() {
    return this.categorySubject.asObservable();
  }

  set storeCategory(value: Category[]) {
    this.categorySubject.next(value);
  }

  create(category: Category) {
    this.save(category)
      .subscribe(_category => this.storeCategory = [_category, ...this.categorySubject.value])
  }
  
}
