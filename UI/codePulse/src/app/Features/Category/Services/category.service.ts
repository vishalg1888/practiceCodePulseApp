import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category.model';
import { environment } from 'src/environments/environment.development';
import { UpdateCategoryRequest } from '../Models/update-category-request-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private cookieService: CookieService) 
  { }

  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
}

  getCategoryById(id : string) : Observable<Category> {
  return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
}

  addCategory(model: AddCategoryRequest) : Observable<void> {
  return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories?addAuth=true`, model);
}

  updateCategory(id: string ,updatemodel : UpdateCategoryRequest) : Observable<Category> {
  return this.http.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`, updatemodel);
}

  deleteCategory(id: string) : Observable<Category> {
  return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`);
}
  
}
