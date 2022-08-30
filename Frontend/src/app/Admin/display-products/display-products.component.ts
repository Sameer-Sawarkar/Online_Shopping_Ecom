import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Modules/Product';
import { ProductService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  prodList:Product[]=[];
  cat:string="";
  test:string=''
  constructor(private prodSer:ProductService,private route:ActivatedRoute,private router:Router) {
   
   }

  ngOnInit(): void {


    this.getProductTable();
  }
  getProductTable(){

    this.prodSer.getAllProducts().subscribe((response)=>{

      this.prodList=(response as any)["data"];
        // console.log(this.categoryList);
        console.log((response as any)["data"]);
    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })

}

}
