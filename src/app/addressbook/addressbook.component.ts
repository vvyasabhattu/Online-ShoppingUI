import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import { Addressreq } from '../model/addressreq';
import { ApiService } from '../service/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Useraddress } from '../model/addressrespone';
import { Userdetail } from '../model/getuserresponse';
import { Deleteaddress } from '../model/deleteUserres';
import {Userlist} from '../model/loginresponse';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent implements OnInit {


private  addresUpdateUrl =this.apiService.addresUpdateUrl;

  private addAddressUrl=this.apiService.addAddressUrl;
 private deleteaddressUrl  = this.apiService.deleteaddressUrl;
  public resposeText : string;
  public userid:string;
  public addressid:string;
  public deleteuser:string;
  public action : string = "save";
  public actvar : string;
public addressupdation:boolean;
public usermessage:boolean;

addressdata = new Addressreq('','','','','','','','','');



  ngOnInit() {
      this.getAddressList();
  }


  constructor(private http: HttpClient,private apiService:ApiService,private router: Router) {
    this.userid  = localStorage.getItem('token');
   this.addressid =  localStorage.getItem("addresstoken");

   }

public userId :string= " "+this.userid;
   "getListAddress"={
           "address": {

             "user": {
               id:localStorage.getItem('token')
             }
           }
         };
         addressList:AddressResponse;
         insertaddress : Useraddress;
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
     

        editAddress(address:Addressreq)
        {
          this.addressdata=address;
          this.action = "edit";
         }

        deleteAddress(address:Addressreq){
          this.addressdata=address;
          this.deleteUserAddress();
        }

 "updateaddress" = {

     "appOS": "string",
    "appVersion": "",
    "deviceId": "",
      "address":
        {
          "id": "",
          "addrLine1": "",
          "addrLine2": "",
          "city": "",
          "country": "",
          "pincode": "",
          "state": "",
          "defaultAddress":"",
           "addressTag":"",
          "user": {
            "id":""
               }
               }
  }

  "addaddress" = {

    "appOS": "string",
   "appVersion": "",
   "deviceId": "",
     "address": 
       {
     
         "addrLine1": "",
         "addrLine2": "",
         "city": "",
         "country": "", 
         "pincode": "",
         "state": "",
         "defaultAddress":"falses",
         "addressTag":"", 
         "user": {
       "id":""
     
       
         }
         
       }   
 }

 "deleteaddress" = {
  "appOS": "",
  "appVersion": "",
  "deviceId": "",
    "address": 
      {
		"id":"",
        "user": {
			"id":""
			
        }
        
      }   
}

  someAddress(){
    if(this.action == "save"){
     this.insertAddress();
    
    }else{
      this.updateAddress();
    
    }
  }
 
// insert address operation
  insertAddress()
  {
    console.log('insert Address');
    this.addaddress.address.addrLine1=this.addressdata.addrLine1;
    this.addaddress.address.addrLine2=this.addressdata.addrLine2;
    this.addaddress.address.city=this.addressdata.city;
    this.addaddress.address.country=this.addressdata.country;
    this.addaddress.address.pincode= this.addressdata.pincode;
    this.addaddress.address.state =this.addressdata.state;
    this.addaddress.address.defaultAddress = this.addressdata.defaultAddress;
    this.addaddress.address.addressTag = this.addressdata.addressTag;
    this.addaddress.address.user.id=this.userid;
   
   
   
    this.http.post(this.apiService.addAddressUrl,this.addaddress,httpOptions).subscribe( (data:Useraddress)=>
      {
     
         this.insertaddress=data;
         if(data.errorCode == 0)
         {
          this.getAddressList();
          alert("address profile insert successfully");
          localStorage.setItem('addresstoken',JSON.stringify(data.addressLst[0].id));
         // location.reload();
         }
      });
  }

  //update address operation
  updateAddress()
  {
    console.log('update Address');
    this.updateaddress.address.id= this.addressdata.id;
    this.updateaddress.address.addrLine1=this.addressdata.addrLine1;
    this.updateaddress.address.addrLine2=this.addressdata.addrLine2;
    this.updateaddress.address.city=this.addressdata.city;
    this.updateaddress.address.country=this.addressdata.country;
    this.updateaddress.address.pincode= this.addressdata.pincode;
    this.updateaddress.address.state =this.addressdata.state;
    this.updateaddress.address.defaultAddress =  this.addressdata.defaultAddress;
    this.updateaddress.address.addressTag = this.addressdata.addressTag;
    this.updateaddress.address.user.id=this.userid;

    this.http.post(this.apiService.addresUpdateUrl,this.updateaddress,httpOptions).subscribe( (data:Useraddress)=>
    {
     

      if(data.errorCode == 0)
         {
          this.getAddressList();
       alert("address profile updated successfully");
      // location.reload();
         }
       });  
}

//delete address operation
deleteUserAddress()
{
  this.deleteaddress.address.id= this.addressdata.id;
  this.deleteaddress.address.user.id=this.userid;
 
 
  this.http.post(this.apiService.deleteaddressUrl , this.deleteaddress,httpOptions).subscribe((data:Deleteaddress)=>
    {
      if(data.errorCode == 0)
         {
        
          this.getAddressList();
          alert("user address deleted");
         // location.reload();
        
         
     }
    });
  }
  getUserName():string {
    let user : Userlist;
   user = JSON.parse(localStorage.getItem('userData'));
   console.log(user);
 
   return user.firstName;
  }
  addresshandling()
  {
this.addressupdation=true;
  }
  addressclose()
  {
    this.addressupdation=false;
  }
}
    