import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../Modules/Category';
import { Product } from '../Modules/Product';
import { CartApiService } from '../Service/cart-api.service';
import { ProductService } from '../Service/product-service.service';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prodId:string="";
  prod:string="";
  prodList:Product[]=[];
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
  


  prodDetail:Product={
    product_id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    available: false,
    imageUrl: '',
    category:{
      category_id:0,
      name:"",
      description:""
    },
    retailer:{
      retailer_id:0,
      ownerName:"",
	    shopName:"",
	    email:"",
	    phone:"",
	    password:"",
	    authenticate:false,
	    address:""
    }
    
  }
  constructor(private prodSer:ProductService,private route:ActivatedRoute,private router:Router,private cartApi:CartApiService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      console.log(typeof(JSON.stringify(params)));
      this.prod=JSON.stringify(params)
    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })
    this.getProduct();
    
    
  }

  getProduct(){
    this.prodSer.getProductDetails(this.prod).subscribe(response=>{
      this.prodDetail=(response as any)["data"];
      this.prodId=JSON.stringify(this.prodDetail.category.category_id);
      console.log(this.prodDetail);
      console.log(typeof(this.prodId));
      console.log(this.prodId);
      this.getProductTable(this.prodId);
        console.log((response as any)["data"]);
  },(error)=>{
    console.log(error)
    alert(error.error.message)
  });

}
getProductTable(prodId:string){
  this.prodSer.getProdbyCat(prodId).subscribe(response=>{
    this.prodList=(response as any)["data"];
      // console.log(this.categoryList);
      console.log((response as any)["data"]);
},(error)=>{
  console.log(error)
  alert(error.error.message)
});

}
public navigateToDetails(product_id:number){
  this.router.navigate(['/product-detail'],{
    queryParams:{product_id:JSON.stringify(product_id)}
  })

}
addtoCart(item:any){

  //check if user is logged in or not

  if(sessionStorage.getItem('userId')!=null){
    this.cartApi.addToCart(item);
  }
  else{
    alert("Please Login to continue")
    this.router.navigate(['login']);
  }

 // this.cartApi.addToCart(item);
}

}