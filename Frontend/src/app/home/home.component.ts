import { Component, OnInit } from '@angular/core';

import { OwlOptions} from 'ngx-owl-carousel-o';


import { Router } from '@angular/router';
import { Category } from '../Modules/Category';
import { ProductService } from '../Service/product-service.service';
import { Product } from '../Modules/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodList:Product[]=[];
  test: string ="";
  categoryList:Category[]=[];
  cat:string="2";
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  

  constructor(private prodSer:ProductService,private router:Router) { }

  ngOnInit():void{

    this.getProductTable();

    
  }

  public navigateToDetails(product_id:number){
    this.router.navigate(['product-detail'],{
      queryParams:{product_id:JSON.stringify(product_id)}
    })
  
  }
getProductTable(){
  this.prodSer.getProdCarousel().subscribe(response=>{
    this.prodList=(response as any)["data"];
      // console.log(this.categoryList);
      console.log((response as any)["data"]);
},(error)=>{
  console.log(error)
  alert(error.error.message)
});

}
}
  function subscribe(arg0: (response: any) => void) {
    throw new Error('Function not implemented.');
  }
