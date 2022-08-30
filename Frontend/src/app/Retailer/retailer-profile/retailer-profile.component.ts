import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Retailer } from 'src/app/Modules/Retailer';
import { RetailerService } from 'src/app/Service/retailer-service.service';
import { UserService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  message!:any
  dataFromDisplay!:any
  retailerForm!:FormGroup
  userData!:any
  submitted: boolean = false
  disableField: boolean = false
  diableAuth:boolean=true
  editRetailerObject: Retailer = {
    retailer_id: 0,
    ownerName: '',
    shopName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    authenticate: false
  }
  constructor(private fb: FormBuilder,private router: Router,private activateRouter:ActivatedRoute,private userService:UserService,private retailerService:RetailerService) { }

  ngOnInit(): void {

  //  this.loadUserData()

    this.retailerForm= this.fb.group({
      retailer_id:[],
      ownerName:['', Validators.required],
      shopName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      address:['', Validators.required],
      authenticate:['', Validators.required],
    });


     //call user service for getting data

     if(sessionStorage.getItem('retailerId')!=null){
      //retailer logged in
      this.retailerService.getRetailerById(JSON.parse(sessionStorage.getItem('retailerId')!)).subscribe((data)=>{

        this.userData = data
        console.log("Logged in user details : ",this.userData.data)


        this.retailerForm.setValue(
          {
  
            //this.retailerData.data.ownerName == '' ? ownerName = "-" : ownerName = this.retailerData.data.ownerName
  
            retailer_id:this.userData.data.retailer_id,
            ownerName: this.userData.data.ownerName,
            shopName: this.userData.data.shopName,
            email:this.userData.data.email,
            phone:this.userData.data.phone,
            password:this.userData.data.password,
            address:this.userData.data.address,
            authenticate:this.userData.data.authenticate ? 'Yes' : 'No',
           
  
          }
          )

          console.log("User Data of form : ",this.retailerForm.value )




      },(error)=>{
        console.log(error.error.message)
      })
    }else{
      
      console.log("Retailer not logged in")
      alert("You are not logged in")
      sessionStorage.removeItem("retailerId")
      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("adminId")
     
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
    }       

  }

  onFormSubmit(){
    console.log("Data after update : ",this.retailerForm.value)

    // set object values 
    this.editRetailerObject.retailer_id = this.userData.data.retailer_id,
    this.editRetailerObject.ownerName = this.retailerForm.get('ownerName')?.value
    this.editRetailerObject.shopName = this.retailerForm.get('shopName')?.value
    this.editRetailerObject.email = this.retailerForm.get('email')?.value
    this.editRetailerObject.phone = this.retailerForm.get('phone')?.value
    this.editRetailerObject.password = this.retailerForm.get('password')?.value
    this.editRetailerObject.authenticate = this.retailerForm.get('authenticate')?.value == 'Yes' ? this.editRetailerObject.authenticate=true : this.editRetailerObject.authenticate=false
    this.editRetailerObject.address = this.retailerForm.get('address')?.value




    this.retailerService.updateRetailer(this.editRetailerObject).subscribe((data)=>{
      this.userData = data

      this.message = this.userData.message

      console.log("Updated Data : ",this.userData.data)

      alert(this.message)
      this.router.navigate(['add-product'])
    },(error)=>{
      console.log(error)
      alert(error.error.message)
      this.router.navigate(['add-product'])
    })

  }

}
