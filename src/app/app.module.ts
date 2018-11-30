import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AddressprofileComponent } from './addressprofile/addressprofile.component';
import {AddressbookComponent } from './addressbook/addressbook.component';
//import {AgGridModule} from 'ag-grid-angular/community';
import { AgGridModule } from 'ag-grid-angular';


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
    AddressprofileComponent,
    AddressbookComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   MatFormFieldModule,
   MatInputModule,
   //spinner Module
   NgxSpinnerModule,
   AgGridModule.withComponents([])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
