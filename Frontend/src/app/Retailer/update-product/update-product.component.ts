import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Modules/Category';
import { Product } from 'src/app/Modules/Product';
import { Retailer } from 'src/app/Modules/Retailer';
import { CategoryService } from 'src/app/Service/category-service.service';
import { ProductService } from 'src/app/Service/product-service.service';
import { RetailerService } from 'src/app/Service/retailer-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  dataFromDisplay!:any
  productData!:any
  addProductForm!: FormGroup
  submitted: boolean = false
  categoryList:any=[]
  responseData!:any
  retailerDetails!:any
  productCreated!:any
  productObject:Product = {
    product_id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    available: false,
    imageUrl: '',
    category: new Category,
    retailer: new Retailer
  }
  constructor(private fb: FormBuilder,private router: Router,private activateRouter:ActivatedRoute,private categoryService: CategoryService,private retailerService:RetailerService,private productService:ProductService) { }

  ngOnInit(): void {
    this.addProductForm= this.fb.group({
      product_id:[],
      pName: ['', Validators.required],
      pCategory: ['', Validators.required],
      pQuantity: ['', Validators.required],
      pDescription: ['', Validators.required],
      pPrice: ['', Validators.required],
      pAvailable: ['', Validators.required],
      pImageUrl:[],
      pRetailer:[]
    });


    // for catching details
    this.activateRouter.queryParams.subscribe((data)=>{
      this.dataFromDisplay = data

      this.productData = JSON.parse(atob(this.dataFromDisplay.data))

      console.log("In Update retailer ",JSON.parse(atob(this.dataFromDisplay.data)));
      console.log("product data to pass : ",this.productData)
    })


    this.addProductForm.setValue(
      {
        product_id:this.productData.product_id,
        pName: this.productData.name == null ? "-" : this.productData.name,
        pCategory:this.productData.category,
        pQuantity:this.productData.stock,
        pPrice:this.productData.price,
        pAvailable:this.productData.available ? 'Yes' : 'No',
        pDescription:this.productData.description,
        pImageUrl:this.productData.imageUrl,
        pRetailer:this.productData.retailer
      }
      )


     // Get List of All Categories
     this.categoryService.getAllCategories().subscribe((data)=>{

      console.log(data);

      this.responseData = data;

      this.categoryList = this.responseData.data

      console.log(this.categoryList)

      for (const product of this.categoryList) {
        console.log(product.category_id);
      }


    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })


  }

  onSubmit(){
    console.log("After edit : ",this.addProductForm.value)// gettting data

    // now define object to pass
    this.productObject.product_id = this.addProductForm.get('product_id')?.value
    this.productObject.name = this.addProductForm.get('pName')?.value
    this.productObject.description = this.addProductForm.get('pDescription')?.value
    this.productObject.price = this.addProductForm.get('pPrice')?.value
    this.productObject.stock = this.addProductForm.get('pQuantity')?.value
    this.productObject.available = this.addProductForm.get('pAvailable')?.value == "Yes" ? true : false
    this.productObject.imageUrl = this.addProductForm.get('pImageUrl')?.value
    this.productObject.category = this.addProductForm.get('pCategory')?.value
    this.productObject.retailer = this.addProductForm.get('pRetailer')?.value


    console.log("After Assign : ",this.productObject)
    
    


    this.productService.updateProduct(this.productObject).subscribe((data)=>{

      console.log(data)
      this.responseData = data
      alert(this.responseData.message)
      this.router.navigate(['all-products'])
    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })


  }

}
