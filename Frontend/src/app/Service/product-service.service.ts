import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Modules/Category';
import { Product } from '../Modules/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8090/product-api'


  //get All products
  getAllProducts(){
    return this.http.get<[]>(this.baseUrl + '/get-all-product');
  }


  // Add Product

  addProduct(product:Product){
    return this.http.post(this.baseUrl + '/add-product',product)
  }

  //get All products
  getProductsByRetailerID(retailerId:number){
    return this.http.get<[]>(this.baseUrl + '/get-product-by-retailerid/' + retailerId);
  }

  updateProduct(product:Product){

    console.log("In Update service : ",product)
    return this.http.put(this.baseUrl + '/update-product/'+ product.product_id , product)
  }

  public getProdCarousel(){
    return this.http.get<Product[]>(this.baseUrl + '/get-all-product');
  }


  public getCatList()
  {
    return this.http.get<Category[]>('http://localhost:8090/category-api/get-category-list');
  }
  public getProdList(id:string)
  {
    //this.cat=parseInt(id);
    // this.cat=parseInt(id);
    var obj=JSON.parse(id);
    //console.log(typeof(this.cat))
    ///console.log(obj.id)
    // id=parseInt(id)
    return this.http.get<Product[]>(this.baseUrl + '/get-product-bycategory/'+obj.id);
  }

  public getProdbyCat(id:any)
  {
    // this.cat=parseInt(id);
    // this.cat=parseInt(id);
    // var obj=JSON.parse(id);
    console.log(typeof(id))
    console.log(id)
    // id=parseInt(id)
    return this.http.get<Product[]>(this.baseUrl + '/get-product-bycategory/'+id);
  }
 
  public getProductDetails(id:string){
    console.log(id)
    var obj=JSON.parse(id)
    console.log(obj)
    // var obj=JSON.parse(id);
    // console.log(typeof(obj))
    // console.log(typeof(obj.id),obj.id)
    return this.http.get<Product>(this.baseUrl + '/get-product-byid/'+obj.product_id);
  }

  // getRetailerById(retailerId:number){
  //   return this.http.get<{}>(this.baseUrl + '/get-retailer-byId/' + retailerId);
  // }


  upload(file:File):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post('http://localhost:8090/uploadFile', formData)
}
}
