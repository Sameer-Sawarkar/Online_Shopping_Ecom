import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Modules/Product';
import { AdminService } from 'src/app/Service/admin-service.service';
import { ProductService } from 'src/app/Service/product-service.service';
import { RetailerService } from 'src/app/Service/retailer-service.service';
import { faCoffee,faPencil ,faTrashAlt,faUserPen,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  faCoffee = faCoffee;
  faPencil=faPencil;
  faTrashAlt=faTrashAlt;
  faUserPen=faUserPen
  faSearch=faSearch
  retailerID!:any
  responseData!:any
  productList!:any
  test:string=''
  constructor(private fb: FormBuilder,private router: Router,private activateRouter:ActivatedRoute,private retailerService:RetailerService,private adminService:AdminService,private productService:ProductService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('retailerId')!=null){
      this.retailerID = JSON.parse(sessionStorage.getItem('retailerId')!);
      //call product service 
    this.productService.getProductsByRetailerID(this.retailerID).subscribe((data)=>{

        this.responseData = data
        this.productList = this.responseData.data

        console.log("Product List : ",this.productList)

    },(error)=>{
      console.log(error)
      
    })


    }else{

      //navigate to login page
      alert("Please Login")
    }


    

    


  }


  productData(product:Product){
    console.log(product)
    this.router.navigate(['update-product'],{
      queryParams:{data:btoa(JSON.stringify(product))}
    })
  }

}
