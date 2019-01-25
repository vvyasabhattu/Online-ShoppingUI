import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import{BillingAddress} from '../model/billingaddressreq';
import {Userlist} from '../model/loginresponse'; 

import { Addressreq } from '../model/addressreq';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-deliveryaddress',
  templateUrl: './deliveryaddress.component.html',
  styleUrls: ['./deliveryaddress.component.css']
})
export class DeliveryaddressComponent implements OnInit {
  public usermessage:boolean;
  public usermsg: boolean;
  public userid:string;
  public addressid:string;
  public deliveryform:boolean= true;
  addressList:AddressResponse;
  public gmapsuser :boolean = false;
   user : Userlist;

  constructor(private http: HttpClient,private apiService:ApiService,private router: Router) {
    this.userid  = localStorage.getItem('token');
    this.addressid =  localStorage.getItem("addresstoken");
   
     this.user = JSON.parse(localStorage.getItem('userData'));

  
  }
billingaddress = new BillingAddress('','','','','','','','');
  ngOnInit() {
    this.getAddressList();
  }
  public userId :string= " "+this.userid;
  "getListAddress"={
          "address": {

            "user": {
              id:localStorage.getItem('token')
            }
          }
        };
  getAddressList(){
    console.log("Get Address List.............................");
   this.http.post(this.apiService.addressListUrl,this.getListAddress).subscribe( (data:AddressResponse)=>
      {
   
         this.addressList=data;
         if(data.addressResponseLst.length == 0)
         {
          
this.usermessage = true;
         } else if(data.addressResponseLst.length > 0)
         {
           this.usermessage  = false;
         }

         
      });
  }
  addresshandle()
  {
    this.usermsg =true;
    this.deliveryform = false;
  }
  addresscloser()
  {
    this.usermsg =false;
    this.deliveryform = true;
  }
  selectaddress(address:Addressreq)
  {
  this.billingaddress.addressLine1= address.addrLine1;
    this.billingaddress.city =address.city;
    this.billingaddress.state = address.state;
    this.billingaddress.country =address.country;
  this.billingaddress.zipcode  = address.pincode;
    this.billingaddress.landMark = address.addrLine2;
  this.billingaddress.email = this.user.email;
  this.billingaddress.contactNumber  = this.user.contactNumber;


  }
  someAddress()
  {

  }
mapping()
{
  this.gmapsuser = true;
  this.deliveryform = false;
}
addressclose()
{
  this.deliveryform = true;
  this.gmapsuser = false;
}
}
