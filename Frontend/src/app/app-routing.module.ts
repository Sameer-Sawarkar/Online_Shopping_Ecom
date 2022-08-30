import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './Retailer/add-product/add-product.component';
import { AppComponent } from './app.component';
import {DisplayRetailersComponent} from './Admin/display-retailers/display-retailers.component'
import { UpdateRetailerComponent } from './Admin/update-retailer/update-retailer.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { AllProductsComponent } from './Retailer/all-products/all-products.component';
import { UpdateProductComponent } from './Retailer/update-product/update-product.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { RetailerProfileComponent } from './Retailer/retailer-profile/retailer-profile.component';
import { DisplayProductsComponent } from './Admin/display-products/display-products.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'user-profile', component:UserProfileComponent},

  {path:'product', component:ProductComponent},
  {path:'product-detail', component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'admin-login', component:LoginAdminComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'retailer-profile',component:RetailerProfileComponent},
  {path:'display-retailers', component:DisplayRetailersComponent},
  {path:'display-all-products',component:DisplayProductsComponent},
  {path:'update-retailer', component:UpdateRetailerComponent},
  {path:'all-products', component:AllProductsComponent},
  {path:'update-product', component:UpdateProductComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
