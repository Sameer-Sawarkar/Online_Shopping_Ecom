import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8090/category-api'

  // Register User
  getAllCategories(){
    return this.http.get<{}>(this.baseUrl + '/get-category-list');
  }
}
