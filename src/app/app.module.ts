import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

import { FormsModule,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './service/auth.guard';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AccounteditComponent } from './accountedit/accountedit.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import {NgxSpinnerModule } from 'ngx-spinner';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleProductComponent } from './single-product/single-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';

import { AddressprofileComponent } from './addressprofile/addressprofile.component';
import {AddressbookComponent } from './addressbook/addressbook.component';
import { AgGridModule } from 'ag-grid-angular';
import { AdminModule } from './admin/admin.module';
import { FilterPipe } from './filter.pipe';
import { ApiService } from './service/api.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
//import { ToastAlertsComponent } from './toast-alerts/toast-alerts.component';
import {ToastHostComponent } from './toast-host/toast-host.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { ResetpasswordoptionsComponent } from './resetpasswordoptions/resetpasswordoptions.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { PaypalgatewayComponent } from './paypalgateway/paypalgateway.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PayumoneyComponent } from './payumoney/payumoney.component';


@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    PagenotfoundComponent,
    MyaccountComponent,
    AccounteditComponent,
    ViewaccountComponent,
    CartComponent,

    SingleProductComponent,
    SearchComponent,

    AddressprofileComponent,
    AddressbookComponent,
    FilterPipe,
    ResetpasswordComponent,
    
    ToastHostComponent,
    
    CustomerserviceComponent,
    
    ConfirmpasswordComponent,
    
    ResetpasswordoptionsComponent,
    
    GmapsComponent,
    
    PaypalgatewayComponent,
    
    PayumoneyComponent
 
  ],
  imports: [
    BrowserModule,
    UiModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   MatFormFieldModule,
   MatInputModule,
   NgxPayPalModule,

   //spinner Module
   NgxSpinnerModule,
   NgbModule.forRoot(),

   AgGridModule.withComponents([])

  ],
  providers: [AuthGuard,SearchService,ApiService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
