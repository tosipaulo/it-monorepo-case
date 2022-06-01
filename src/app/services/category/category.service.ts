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

  save(category: Category) {
    return this.http.post<Category>(`${environment.api}/categoria`, category);
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
