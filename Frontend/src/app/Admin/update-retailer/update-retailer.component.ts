import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Retailer } from 'src/app/Modules/Retailer';
import { AdminService } from 'src/app/Service/admin-service.service';
import { RetailerService } from 'src/app/Service/retailer-service.service';

@Component({
  selector: 'app-update-retailer',
  templateUrl: './update-retailer.component.html',
  styleUrls: ['./update-retailer.component.css']
})
export class UpdateRetailerComponent implements OnInit {

  dataFromDisplay!:any
  retailerForm!:FormGroup
  retailerData!:any
  submitted: boolean = false
  disableField: boolean = false
  editRetailerObject:Retailer = {
    retailer_id: 0,
    ownerName: '',
    shopName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    authenticate: false
  }
  authenticated!:any ;

  constructor(private fb: FormBuilder,private router: Router,private activateRouter:ActivatedRoute,private retailerService:RetailerService,private adminService:AdminService) { }

  ngOnInit(): void {

    this.retailerForm= this.fb.group({
      retailer_id:[],
      ownerName:['', Validators.required],
      shopName:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      address:['', Validators.required],
      authenticate: ['', Validators.required]
    });




    this.activateRouter.queryParams.subscribe((data)=>{
      this.dataFromDisplay = data

      this.retailerData = JSON.parse(atob(this.dataFromDisplay.data))

      console.log("In Update retailer ",JSON.parse(atob(this.dataFromDisplay.data)));
      console.log("retialer data to pass : ",this.retailerData)
    })


    //get retailer data by id
    this.retailerService.getRetailerById(this.retailerData.retailer_id).subscribe((data)=>{
      this.retailerData = data

      //set to form

      //this.retailerForm.setValue(this.retailerData.data)
      this.retailerForm.setValue(
        {

          //this.retailerData.data.ownerName == '' ? ownerName = "-" : ownerName = this.retailerData.data.ownerName

          retailer_id:this.retailerData.data.retailer_id,
          ownerName: this.retailerData.data.ownerName == null ? "-" : this.retailerData.data.ownerName,
          shopName:this.retailerData.data.shopName,
          email:this.retailerData.data.email,
          phone:this.retailerData.data.phone,
          address:this.retailerData.data.address == null ? "-" : this.retailerData.data.address,
          authenticate:this.retailerData.data.authenticate,

        }
        )

        this.disableField=true
      console.log("Retailer Data of form : ",this.retailerForm.value )

      //this.editRetailerObject = this.retailerDetails.data



    },(error)=>{
      console.log(error)
      alert(error.error.message)
    })


  }


  onSubmit(){
    this.submitted=true
    console.log("On Submit : ",this.retailerForm.value)

    this.editRetailerObject.retailer_id = this.retailerForm.get('retailer_id')?.value

    this.retailerForm.get('authenticate')?.value == 'Yes' ? this.editRetailerObject.authenticate = true : this.editRetailerObject.authenticate = false
   
    this.adminService.authenticateRetailer(this.editRetailerObject).subscribe((data)=>{

      console.log(data)
      this.authenticated = data
      alert(this.authenticated.message)
      this.router.navigate(['display-retailers'])
    },(error)=>{
      console.log(error)
    })


  }

}
