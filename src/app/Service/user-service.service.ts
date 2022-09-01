import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Modules/User';
import { Product } from '../Modules/Product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8090/user-api'

  // Register User
  registerUser(user: User) {
    return this.http.post(this.baseUrl + '/register-user',user)
  }

  loginUser(user:User){
    return this.http.post(this.baseUrl + '/login-user',user)
  }


  getUserById(userId:number){
    return this.http.get<{}>(this.baseUrl + '/get-user-byid/' + userId);
  }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:8090/product-api/get-all-product');
  }

  updateUser(user:User){
    return this.http.put(this.baseUrl + '/update-user/'+ user.id , user)
  }

}
