import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  userLoginForm!: FormGroup
  submitted: boolean = false
  error:boolean=false
  message:string=''
  userResponse!:any;


  constructor(private formBuilder: FormBuilder, private router: Router,private adminService: AdminService) { }

  ngOnInit(): void {
    this.error=false
     this.userLoginForm= this.formBuilder.group({
      
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
          this.adminService.loginAdmin(this.userLoginForm.value).subscribe((data) => {
      
      
            this.userResponse = data; //this worked
            console.log(this.userResponse.data.id) //this worked
            sessionStorage.removeItem("userId")
            sessionStorage.removeItem("retailerId")
            sessionStorage.setItem("adminId",this.userResponse.data.admin_id) 
           // localStorage.removeItem("userId")
            //localStorage.removeItem("retailerId")
            //localStorage.setItem("userId",this.userResponse.data.id) //set userid
            
      
            this.message = this.userResponse.message
            alert(this.userResponse.message)
    
           // this.router.navigate(['display-retailers'])
            this.router.navigate(['display-retailers'])
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
