import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Retailer/add-product/add-product.component';
import { DisplayRetailersComponent } from './Admin/display-retailers/display-retailers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { UpdateRetailerComponent } from './Admin/update-retailer/update-retailer.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { UpdateProductComponent } from './Retailer/update-product/update-product.component';
import { AllProductsComponent } from './Retailer/all-products/all-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DisplayProductsComponent } from './Admin/display-products/display-products.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { RetailerProfileComponent } from './Retailer/retailer-profile/retailer-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailComponent,
    AddProductComponent,
    DisplayRetailersComponent,
    UpdateRetailerComponent,
    LoginAdminComponent,
    UpdateProductComponent,
    AllProductsComponent,
    ProductComponent,
    CartComponent,
    DisplayProductsComponent,
    UserProfileComponent,
    RetailerProfileComponent,
    PaymentComponent,
    ThankyouComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    CarouselModule,
  //   ImagekitioAngularModule.forRoot({

  //     publicKey: "public_uyc/OZswmVYeM7rvj19wIBHmFaM=", // or environment.publicKey

  //     urlEndpoint: "https://ik.imagekit.io/ol5ujroevjc", // or environment.urlEndpoint
  //     privateKey:"",

  //   //  authenticationEndpoint: "http://www.yourserver.com/auth" // or environment.authenticationEndpoint

  // })

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
