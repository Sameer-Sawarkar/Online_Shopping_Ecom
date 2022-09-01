import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from '../Service/retailer-service.service';
import { UserService } from '../Service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userLoginForm!: FormGroup
  submitted: boolean = false
  error:boolean=false
  message:string=''
  userData:Object={}

  userResponse!:any;
  retailerResponse!:any

  responseObject!: any;

  retailerLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService,private retailerService:RetailerService) { }

  ngOnInit(): void {

    this.error=false
     this.userLoginForm= this.formBuilder.group({
      
      email: ['', Validators.required],
      password:['', Validators.required],
    });

    this.retailerLoginForm= this.formBuilder.group({
      
      email: ['', Validators.required],
      password:['', Validators.required],
    });

  
  }

 

       /////// User Signup /////
       onSubmit() {
   
        this.submitted=true
    
        if(!this.userLoginForm.valid){
          console.log("Form not  validated - dont send")
        }else{
       
        console.log("values from form : ",this.userLoginForm.value)
        this.userService.loginUser(this.userLoginForm.value).subscribe((data) => {
    
    
          this.userResponse = data; //this worked
          console.log(this.userResponse.data.id) //this worked
          sessionStorage.removeItem("userId")
          sessionStorage.removeItem("retailerId")
          sessionStorage.setItem("userId",this.userResponse.data.id) 
         // localStorage.removeItem("userId")
          //localStorage.removeItem("retailerId")
          //localStorage.setItem("userId",this.userResponse.data.id) //set userid
          
    
          this.message = this.userResponse.message
          alert(this.userResponse.message)
          //window.location.reload();
          this.router.navigate(['home'])
  .then(() => {
    window.location.reload();
  });
          //this.router.navigate(['home'])
          
        },(error)=>{
          this.error=true
          this.message = error.error.message
          alert(error.error.message)
         
          console.log("Error : ",error)
        })
    
        }
    
    
    
    }


      /////// Retailer Signup /////
  onRetailerFormSubmit() {
   
    this.submitted=true

    if(!this.retailerLoginForm.valid){
      console.log("Form not  validated - dont send")
    }else{

    console.log("values from form : ",this.retailerLoginForm.value)

    this.retailerService.loginRetailer(this.retailerLoginForm.value).subscribe((data)=>{

      console.log(data)
      this.retailerResponse = data; //this worked
      console.log(this.retailerResponse.data.retailer_id) //this worked
       
      sessionStorage.removeItem("retailerId")
      sessionStorage.removeItem("userId")
      sessionStorage.setItem("retailerId",this.retailerResponse.data.retailer_id) //set reatilerid

      //localStorage.removeItem("retailerId")
      //localStorage.removeItem("userId")
      //localStorage.setItem("retailerId",this.retailerResponse.data.retailer_id) //set reatilerid

      this.message = this.retailerResponse.message
      alert(this.retailerResponse.message)

      this.router.navigate(['add-product'])
      .then(() => {
        window.location.reload();
      });
     // this.router.navigate(['add-product'])
    },(error)=>{
      this.error=true
      this.message = error.error.message
      alert(error.error.message)
     
      console.log("Error : ",error)
    })


    }
 
  }













  goToSignUp(){
    this.router.navigate(['signup']);
  }
}
