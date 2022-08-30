import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retailer } from '../Modules/Retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8090/retailer-api'

  // Register User
  registerRetailer(retailer: Retailer) {
    return this.http.post(this.baseUrl + '/register-retailer',retailer)
  }

  loginRetailer(retailer:Retailer){
    return this.http.post(this.baseUrl + '/login-retailer',retailer)
  }

  getRetailerById(retailerId:number){
    return this.http.get<{}>(this.baseUrl + '/get-retailer-byId/' + retailerId);
  }
  

  updateRetailer(retailer:Retailer){
    return this.http.put(this.baseUrl + '/update-retailer/'+ retailer.retailer_id , retailer)
  }


}
