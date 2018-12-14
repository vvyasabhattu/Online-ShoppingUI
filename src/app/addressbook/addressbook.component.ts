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

addressdata = new Addressreq('','','','','','','','','');
//addressEmptydata = new Addressreq('','','','','','','');


  ngOnInit() {
      this.getAddressList();
  }


  constructor(private http: HttpClient,private apiService:ApiService,private router: Router) {
    this.userid  = localStorage.getItem('token');
 // console.log(this.userid);
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
          // this.http.post(this.apiService.addressListUrl,this.getListAddress,httpOptions).subscribe((data:AddressResponse)=>{
          //   console.log(JSON.stringify(data));
          //   this.addressList=data;
          // });
          this.http.post(this.apiService.addressListUrl,this.getListAddress).subscribe( (data:AddressResponse)=>
            {
              //console.log(data);
               this.addressList=data;
            });
        }
     

        editAddress(address:Addressreq){
          //console.log('edit table');
          //console.log(address);
          this.addressdata=address;
          this.action = "edit";
          //console.log('action in edit ',this.action);
          //this.updateAddress();
        }
        deleteAddress(address:Addressreq){
//console.log('Address deleted..'+address);
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
      //apiUrl = this.apiService.addAddressUrl;
    }else{
      this.updateAddress();
      //apiUrl = this.apiService.addresUpdateUrl;
    }
  }
  defaultAddress(address:Addressreq)
  {
     this.actvar ="true";
     this.addressdata=address;
   this.addressdata.defaultAddress = this.actvar;
  
this.updateAddress();

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
    //console.log(this.addaddress);

 
    //console.log('1111111111111111111'+this.action);
   
   
    this.http.post(this.apiService.addAddressUrl,this.addaddress,httpOptions).subscribe( (data:Useraddress)=>
      {
      //  console.log("insert data..........")
        //console.log(data);
         this.insertaddress=data;
         if(data.errorCode == 0)
         {
          this.getAddressList();
          localStorage.setItem('addresstoken',JSON.stringify(data.addressLst[0].id));
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
   // console.log(this.updateaddress);
    this.http.post(this.apiService.addresUpdateUrl,this.updateaddress,httpOptions).subscribe( (data:Useraddress)=>
    {
      this.getAddressList();
     // this.updateaddress.address = this.addressEmptydata;
  //   this.updateaddress.address =new   A
   // $("#cform").reset();
   //this.router.navigate(['']);
     //document.getElementById("reset").click();
      console.log("update data..........")
        console.log(data);
       // this.insertaddress=data;
       });  
}

//delete address operation
deleteUserAddress()
{
  this.deleteaddress.address.id= this.addressdata.id;
  this.deleteaddress.address.user.id=this.userid;
  //console.log(this.deleteaddress);
 
  this.http.post(this.apiService.deleteaddressUrl , this.deleteaddress,httpOptions).subscribe((data:Deleteaddress)=>
    {
      if(data.errorCode == 0)
         {
          this.getAddressList();
//console.log("user address deleted")
     }
    });
  }
  getUserName():string {
    let user : Userlist;
   user = JSON.parse(localStorage.getItem('userData'));
   console.log(user);
  // this.role=user.roleLst[0]["role"];
  // console.log(user.roleLst[0]["role"]);
   return user.firstName;
  }
}
    