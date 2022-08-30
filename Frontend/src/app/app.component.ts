import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './Modules/Category';
import { CartApiService } from './Service/cart-api.service';
import { ProductService } from './Service/product-service.service';
import { RetailerService } from './Service/retailer-service.service';
import { UserService } from './Service/user-service.service';
import { faCoffee,faPencil ,faTrashAlt,faUserPen,faSearch,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DotStore';

  faCoffee = faCoffee;
  faPencil=faPencil;
  faTrashAlt=faTrashAlt;
  faUserPen=faUserPen
  faSearch=faSearch
  faSignOutAlt=faSignOutAlt



  userId:any;
  retailerId:any
  showName:boolean=false
  responseObject:any
  userName:string=''
  flag:string=''

  userNav:boolean=false
  retailerNav:boolean=false
  adminNav:boolean=false
  totalItemNumber:number=0;
  categoryList:Category[]=[];
  constructor(private router:Router,private userService: UserService,private retailerService:RetailerService,private cartApi:CartApiService,private productService:ProductService) { }

  ngOnInit(): void {
    
    this.getHome()
    this.getCatList()

    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
    })
  
  }

  public navigateToprod(id:number){
    this.router.navigate(['product'],{
      queryParams:{id:JSON.stringify(id)}
    })
  }

  getCatList(){

    this.productService.getCatList().subscribe(response=>{
    this.categoryList=(response as any)["data"];
      // console.log(this.categoryList);
      console.log((response as any)["status"]);
      


  });
 
}

logout(){
  sessionStorage.removeItem("userId")
  sessionStorage.removeItem("retailerId")
  sessionStorage.removeItem("adminId")

  this.router.navigate(['home']).then(() => {
    window.location.reload();
  });
}

  getHome(){

    if(sessionStorage.getItem('userId')!=null){

      // If user is logged in

      this.flag= 'User'
      this.userNav=true;

      this.userId = JSON.parse(sessionStorage.getItem('userId')!);

      

      //call user service
      this.userService.getUserById(this.userId).subscribe((data)=>{

        this.responseObject = data

        console.log(this.responseObject)
        this.userName = this.responseObject.data.name
        this.showName=true

      },(error)=>{
        console.log(error)
      })

      this.showName=true

    }else if(sessionStorage.getItem('retailerId')!=null){
      
      // If retailer is logged in
    
      this.flag = 'Retailer'
      this.retailerNav=true;
      
    
      this.retailerId = JSON.parse(sessionStorage.getItem('retailerId')!);

      //call service
      this.retailerService.getRetailerById(this.retailerId).subscribe((data)=>{

        this.responseObject = data
        this.userName = this.responseObject.data.shopName
        this.showName=true

      },(error)=>{
        console.log(error)
      })

      
    this.showName=true
     
    this.router.navigate(['add-product']);
     

    }else if(sessionStorage.getItem('adminId')!=null){

      
      this.flag = 'Admin'
      this.adminNav=true;
      
    
     // this.retailerId = JSON.parse(sessionStorage.getItem('retailerId')!);

      //call service
      // this.retailerService.getRetailerById(this.retailerId).subscribe((data)=>{

      //   this.responseObject = data
      //   this.userName = this.responseObject.data.shopName
      //   this.showName=true

      // },(error)=>{
      //   console.log(error)
      // })

      
    this.showName=true
     
    this.router.navigate(['display-retailers']);

    }else{

      // No one is logged in
      this.flag='User'
      this.userNav=true
      this.router.navigate(['home']);
    }
  }
}

