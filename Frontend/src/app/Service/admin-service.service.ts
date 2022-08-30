import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retailer } from '../Modules/Retailer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  baseUrl: string = 'http://localhost:8090/admin-api'

  // Register User

  loginAdmin(retailer:Retailer){
    return this.http.post(this.baseUrl + '/login-admin',retailer)
  }
  getAllRetailers(){
    return this.http.get<{}>(this.baseUrl + '/get-all-retailers');
  }

  authenticateRetailer(retailer:Retailer){
    return this.http.post(this.baseUrl + '/authenticate-retailer',retailer)
  }


}
