import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Modules/User';
import { UserService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  message!:any
  dataFromDisplay!:any
  userForm!:FormGroup
  userData!:any
  submitted: boolean = false
  disableField: boolean = false
  editUserObject: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    phone: '',
    token: '',
    address: '',
    gender: '',
    dob: ''
  };
  constructor(private fb: FormBuilder,private router: Router,private activateRouter:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {

  //  this.loadUserData()

    this.userForm= this.fb.group({
      id:[],
      name:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      password:['', Validators.required],
      token:['', Validators.required],
      gender:['', Validators.required],
      address:['', Validators.required],
    });


     //call user service for getting data

     if(sessionStorage.getItem('userId')!=null){
      //retailer logged in
      this.userService.getUserById(JSON.parse(sessionStorage.getItem('userId')!)).subscribe((data)=>{

        this.userData = data
        console.log("Logged in user details : ",this.userData.data)


        this.userForm.setValue(
          {
  
            //this.retailerData.data.ownerName == '' ? ownerName = "-" : ownerName = this.retailerData.data.ownerName
  
            id:this.userData.data.id,
            name: this.userData.data.name,
            email:this.userData.data.email,
            phone:this.userData.data.phone,
            password:this.userData.data.password,
            token:this.userData.data.token,
            gender:this.userData.data.gender,
            address:this.userData.data.address,
  
          }
          )

          console.log("User Data of form : ",this.userForm.value )




      },(error)=>{
        console.log(error.error.message)
      })
    }else{
      
      console.log("User not logged in")
      alert("You are not logged in")
      sessionStorage.removeItem("retailerId")
      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("adminId")
     
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
    }       

  }

  // loadUserData(){
  //   //call user service for getting data

  //   if(sessionStorage.getItem('userId')!=null){
  //     //retailer logged in
  //     this.userService.getUserById(JSON.parse(sessionStorage.getItem('userId')!)).subscribe((data)=>{

  //       this.userData = data
  //       console.log("Logged in user details : ",this.userData.data.name)

  //     },(error)=>{
  //       console.log(error.error.message)
  //     })
  //   }else{
      
  //     console.log("User not logged in")
  //     alert("You are not logged in")
  //     sessionStorage.removeItem("retailerId")
  //     sessionStorage.removeItem("userId")
  //     sessionStorage.removeItem("adminId")
     
  //     this.router.navigate(['home']).then(() => {
  //       window.location.reload();
  //     });
  //   }


  // }

  onFormSubmit(){
    console.log("Data after update : ",this.userForm.value)

    // set object values 
    this.editUserObject.id = this.userData.data.id,
    this.editUserObject.name = this.userForm.get('name')?.value
    this.editUserObject.email = this.userForm.get('email')?.value
    this.editUserObject.phone = this.userForm.get('phone')?.value
    this.editUserObject.password = this.userForm.get('password')?.value
    this.editUserObject.token = this.userForm.get('token')?.value
    this.editUserObject.gender = this.userForm.get('gender')?.value
    this.editUserObject.address = this.userForm.get('address')?.value




    this.userService.updateUser(this.editUserObject).subscribe((data)=>{
      this.userData = data

      this.message = this.userData.message

      console.log("Updated Data : ",this.userData.data)

      alert(this.message)
      this.router.navigate(['home'])
    },(error)=>{
      console.log(error)
      alert(error.error.message)
      this.router.navigate(['home'])
    })

  }







}
