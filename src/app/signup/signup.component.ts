import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user-service.service';
import { RetailerService } from '../Service/retailer-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  userSignupForm!: FormGroup
  submitted: boolean = false
  error:boolean=false
  message:string=''
  userData:Object={}

  userResponse!:any;
  retailerResponse!:any

  responseObject!: any;

  retailerSignupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService,private retailerService:RetailerService) { }

  ngOnInit(): void {

    this.error=false
     this.userSignupForm= this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password:['', Validators.required],
    });

    this.retailerSignupForm= this.formBuilder.group({
      id: [],
      shopName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password:['', Validators.required],
    });

  }



     /////// User Signup /////
    onSubmit() {
   
    this.submitted=true

    if(!this.userSignupForm.valid){
      console.log("Form not  validated - dont send")
    }else{
   
    console.log("values from form : ",this.userSignupForm.value)
    this.userService.registerUser(this.userSignupForm.value).subscribe((data) => {


      this.userResponse = data; //this worked
      console.log(this.userResponse.data.id) //this worked
       
      // localStorage.removeItem("userId")
      // localStorage.removeItem("retailerId")
      // localStorage.setItem("userId",this.userResponse.data.id) //set userid

      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("retailerId")
      sessionStorage.setItem("userId",this.userResponse.data.id) 

      this.message = this.userResponse.message
          alert(this.userResponse.message)
          //window.location.reload();
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
      
    },(error)=>{
      this.error=true
      this.message = error.error.message
      alert(error.error.message)
     
      console.log("Error : ",error)
    })

    }



  }


  goToLogin(){
      this.router.navigate(['login']);
  }





  /////// Retailer Signup /////
  onRetailerFormSubmit() {
   
    this.submitted=true

    if(!this.retailerSignupForm.valid){
      console.log("Form not  validated - dont send")
    }else{

    console.log("values from form : ",this.retailerSignupForm.value)

    this.retailerService.registerRetailer(this.retailerSignupForm.value).subscribe((data)=>{

      console.log(data)
      this.retailerResponse = data; //this worked
      console.log(this.retailerResponse.data.retailer_id) //this worked
       
      // localStorage.removeItem("retailerId")
      // localStorage.removeItem("userId")
      // localStorage.setItem("retailerId",this.retailerResponse.data.retailer_id) //set reatilerid

      sessionStorage.removeItem("retailerId")
      sessionStorage.removeItem("userId")
      sessionStorage.setItem("retailerId",this.retailerResponse.data.retailer_id) //set reatilerid

      this.message = this.retailerResponse.message
      alert(this.retailerResponse.message)


      
      this.router.navigate(['add-product'])
      .then(() => {
        window.location.reload();
      });


    },(error)=>{
      this.error=true
      this.message = error.error.message
      alert(error.error.message)
     
      console.log("Error : ",error)
    })


    }
 
  }


}
