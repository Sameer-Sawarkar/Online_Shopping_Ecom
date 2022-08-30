import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Modules/Product';
import { ProductService } from '../Service/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodList:Product[]=[];
  cat:string="";
  test:string=''
  constructor(private prodSer:ProductService,private route:ActivatedRoute,private router:Router) {
   
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(typeof(JSON.stringify(params)));
      this.cat=JSON.stringify(params)
    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })

    this.getProductTable();
  }
  getProductTable(){
    this.prodSer.getProdList(this.cat).subscribe(response=>{
      this.prodList=(response as any)["data"];
        // console.log(this.categoryList);
        console.log((response as any)["data"]);
  },(error)=>{
    console.log(error)
    alert(error.error.message)
  });

}

public navigateToDetails(product_id:number){
  this.router.navigate(['product-detail'],{
    queryParams:{product_id:JSON.stringify(product_id)}
  })

}
}
