import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Modules/Category';
import { Product } from 'src/app/Modules/Product';
import { Retailer } from 'src/app/Modules/Retailer';
import { CategoryService } from 'src/app/Service/category-service.service';
import { ProductService } from 'src/app/Service/product-service.service';
import { RetailerService } from 'src/app/Service/retailer-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
  imageResponse!:any
  imageUrl:string=''

  alertMessage:string=''

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File  // Variable to store file




    constructor(private fb: FormBuilder,private router: Router,private categoryService: CategoryService,private retailerService:RetailerService,private productService:ProductService) {    }
    
   

  ngOnInit() {
    
    this.addProductForm= this.fb.group({
      pName: ['', Validators.required],
      pCategory: ['', Validators.required],
     // pBrand: ['', Validators.required],
      pQuantity: ['', Validators.required],
      pDescription: ['', Validators.required],
      pPrice: ['', Validators.required],
      pAvailable: ['', Validators.required],
      pImageUrl:[]
    });


    // Get List of All Categories
    this.categoryService.getAllCategories().subscribe((data)=>{

      console.log(data);

      this.responseData = data;

      this.categoryList = this.responseData.data

      console.log(this.categoryList)

      for (const product of this.categoryList) {
        console.log(product.category_id);
      }


    })

    //get retailer details

    if(sessionStorage.getItem('retailerId')!=null){
      //retailer logged in
      this.retailerService.getRetailerById(JSON.parse(sessionStorage.getItem('retailerId')!)).subscribe((data)=>{

        this.retailerDetails = data
        console.log("Logged in retailer details : ",this.retailerDetails.data.shopName)

        if(this.retailerDetails.data.authenticate){
          // retailer is authenticated 
          // ok
          console.log("retailer is authenticated")
          
        }else{
          //retailer is not authenticated
          alert("You are not authentcated yet. We will let you Know once you are authenticated")
          sessionStorage.removeItem("retailerId")
          sessionStorage.removeItem("userId")
          sessionStorage.removeItem("adminId")
         
          this.router.navigate(['home']).then(() => {
            window.location.reload();
          });
        }

      },(error)=>{
        console.log(error.error.message)
      })
    }else{
      //retailer not logged in 
      //redirect to login page
      console.log("Retailer not logged in")
    }

  }



  onSubmit(): void {    

    this.submitted=true

    console.log("values from form : ",this.addProductForm.value)

    if(!this.addProductForm.valid){
      console.log("Form not  validated - dont send")
    }else{

      
      this.productObject.name = this.addProductForm.get('pName')?.value
      this.productObject.category = this.addProductForm.get('pCategory')?.value
      this.productObject.stock = this.addProductForm.get('pQuantity')?.value
      this.productObject.description = this.addProductForm.get('pDescription')?.value
      this.productObject.price = this.addProductForm.get('pPrice')?.value
      this.productObject.imageUrl = this.imageUrl
      this.addProductForm.get('pAvailable')?.value == 'Yes' ? this.productObject.available = true : this.productObject.available = false
      this.productObject.retailer = this.retailerDetails.data
  
  
      console.log("Whole Object : ",this.productObject)
      
      console.log("values from form : ",this.addProductForm.get('pAvailable')?.value)
  
      // define one product object
      // now call service
      this.productService.addProduct(this.productObject).subscribe((data)=>{
  
        console.log("Hope so : ",data)
        this.productCreated = data
        this.alertMessage = this.productCreated.message
        alert(this.alertMessage)
        this.router.navigate(['all-products'])
      },(error)=>{
  
        console.log("Error : ",error);
      })
    }

   
    

  }


  // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
}
  
     // OnClick of button Upload
     onUpload() {
      this.loading = !this.loading;
      console.log(this.file);
      this.productService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {
                console.log("response : ",event);
                  // Short link via api response
                  this.shortLink = event.link;
                  this.imageResponse = event
                  this.imageUrl = this.imageResponse.fileDownloadUri
                  this.loading = false; // Flag variable 
                  alert("Image Uploaded")
              }
          }
      );
  }



}
