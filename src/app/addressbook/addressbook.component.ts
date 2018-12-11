import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import { Addressreq } from '../model/addressreq';
import { ApiService } from '../service/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Useraddress } from '../model/addressrespone';
import { Userdetail } from '../model/getuserresponse';
<<<<<<< Updated upstream
=======
import { Deleteaddress } from '../model/deleteUserres';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
private  addresUpdateUrl =this.apiService.addresUpdateUrl;
>>>>>>> Stashed changes
  private addAddressUrl=this.apiService.addAddressUrl;
 private deleteaddressUrl  = this.apiService.deleteaddressUrl;
  public resposeText : string;
  public userid:string;
<<<<<<< Updated upstream
addressdata = new Addressreq(1,'','','','','','');
=======
  public addressid:string;
  public deleteuser:string;
addressdata = new Addressreq('','','','','','');
>>>>>>> Stashed changes

  ngOnInit() {
      this.getAddressList();
  }


  constructor(private http: HttpClient,private apiService:ApiService) {
    this.userid  = localStorage.getItem('token');
  console.log(this.userid);
<<<<<<< Updated upstream

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
   getAddressList(){
     console.log("Get Address List.............................");
     // this.http.post(this.apiService.addressListUrl,this.getListAddress,httpOptions).subscribe((data:AddressResponse)=>{
     //   console.log(JSON.stringify(data));
     //   this.addressList=data;
     // });
     this.http.post(this.apiService.addressListUrl,this.getListAddress).subscribe( (data:AddressResponse)=>
       {console.log(data);
          this.addressList=data;
       });
   }

   //by Ashish
   editAddress(address:Addressreq){
     console.log('edit table');
     console.log(address);
     this.addressdata=address;
=======
 this.addressid =  localStorage.getItem("addresstoken");
>>>>>>> Stashed changes
   }
//delete address
  deleteAddress(address:Addressreq){
    console.log('Address deleted..'+address);
  }
//update Address

<<<<<<< Updated upstream
    "addaddress" = {
=======
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
   getAddressList()
   {
     console.log("Get Address List.............................");
     // this.http.post(this.apiService.addressListUrl,this.getListAddress,httpOptions).subscribe((data:AddressResponse)=>{
     //   console.log(JSON.stringify(data));
     //   this.addressList=data;
     // });
     this.http.post(this.apiService.addressListUrl,this.getListAddress).subscribe((data:AddressResponse)=>
       {
         console.log("hiii",data);
          this.addressList=data;
          
       });
   }

   //by Ashish
   editAddress(address:Addressreq){
     console.log('edit table');
     console.log(address);
     this.addressdata=address;
     this.updateAddress();
   }
//delete address
  deleteAddress(address:Addressreq){
    console.log('Address deleted..'+address);
    this.deleteUserAddress();
  }
//update Address

    "updateaddress" = {
>>>>>>> Stashed changes

     "appOS": "string",
    "appVersion": "",
    "deviceId": "",
      "address":
        {
<<<<<<< Updated upstream
          id:73,
          "addrLine1": this.addressdata.addrLine1,
          "addrLine2": this.addressdata.addrLine1,
          "city": this.addressdata.city,
          "country": this.addressdata.country,
          "pincode": this.addressdata.pincode,
          "state": this.addressdata.state,
          "user": {
        "id":localStorage.getItem('token')
=======
          "id": "",
          "addrLine1": "",
          "addrLine2": "",
          "city": "",
          "country": "",
          "pincode": "",
          "state": "",
          "user": {
        "id":""
>>>>>>> Stashed changes


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

// insert address operation
  insertAddress(){
    console.log('insert Address');
    this.addaddress.address.addrLine1=this.addressdata.addrLine1;
    this.addaddress.address.addrLine2=this.addressdata.addrLine2;
    this.addaddress.address.city=this.addressdata.city;
    this.addaddress.address.country=this.addressdata.country;
    this.addaddress.address.pincode= this.addressdata.pincode;
    this.addaddress.address.state =this.addressdata.state;
    this.addaddress.address.user.id=this.userid;
    console.log(this.addaddress);
    this.http.post(this.apiService.addAddressUrl,this.addaddress,httpOptions).subscribe( (data:Useraddress)=>
      {
        console.log("insert data..........")
        console.log(data);
         this.insertaddress=data;
         if(data.errorCode == 0)
         {
          localStorage.setItem('addresstoken',JSON.stringify(data.addressLst[0].id));
         }
      });
  }

  //update address operation
  updateAddress()
  {
    console.log('update Address');
    
    this.updateaddress.address.id= this.addressid;
    this.updateaddress.address.addrLine1=this.addressdata.addrLine1;
    this.updateaddress.address.addrLine2=this.addressdata.addrLine2;
    this.updateaddress.address.city=this.addressdata.city;
    this.updateaddress.address.country=this.addressdata.country;
    this.updateaddress.address.pincode= this.addressdata.pincode;
    this.updateaddress.address.state =this.addressdata.state;
    this.updateaddress.address.user.id=this.userid;
    console.log(this.updateaddress);
    this.http.post(this.apiService.addresUpdateUrl,this.updateaddress,httpOptions).subscribe( (data:Useraddress)=>
    {
      console.log("update data..........")
        console.log(data);
        this.insertaddress=data;
       });  
}

//delete address operation
deleteUserAddress()
{
  this.deleteaddress.address.id= this.addressid;
  this.deleteaddress.address.user.id=this.userid;
  console.log(this.deleteaddress);
 
  this.http.post(this.apiService.deleteaddressUrl , this.deleteaddress,httpOptions).subscribe((data:Deleteaddress)=>
    {
      if(data.errorCode == 0)
         {
console.log("user address deleted")
     }
    });
     

<<<<<<< Updated upstream
  updateAddress(){
    console.log('Update Address');
    console.log(this.addaddress);
    this.http.post(this.apiService.addresUpdateUrl,this.addaddress).subscribe( (data:AddressResponse)=>
      {
        console.log("Update data..........")
        console.log(data);
         this.addressList=data;
      });
  }
=======
>>>>>>> Stashed changes

}


}
 /*onsubmit()
    {
      console.log('22222222222222222');

     

//console.log("request object"+this.addaddress);
      this.http.post(this.addAddressUrl,this.addaddress,httpOptions).subscribe((data:Useraddress) => {
        console.log('data  11111111111111111',data);

        if(data.errorCode == 0)
        {
          localStorage.setItem('isaddedaddress', "true");
          localStorage.setItem('userAddress',JSON.stringify(data.addressLst[0]));
          this.resposeText = "your address added successfully."
          let useraddress : Useraddress;
    useraddress = JSON.parse(localStorage.getItem('userAddress'));
    this.rowData[0].id =  useraddress[0].id;
    this.rowData[0].city =  useraddress[0].city;
    this.rowData[0].state =  useraddress[0].state;
    this.rowData[0].country = useraddress[0].country;
    this.rowData[0].pincode = useraddress[0].pincode;
    this.rowData[0].addrLine1 = useraddress[0].addrLine1;
    this.rowData[0].addrLine2 = useraddress[0].addrLine2;
        }
        else {
           this.resposeText = data.errorDesc;
        }
       });

<<<<<<< Updated upstream
    columnDefs = [
=======
   /* columnDefs = [
>>>>>>> Stashed changes
      {
          headerName: "id",
          field: "id",
          width: 100
      },
      {
        headerName: "city",
        field: "city",
        width: 100
     },
     {
      headerName: "state",
      field: "state",
      width: 100
    },
    {
      headerName: "country",
      field: "country",
      width: 100
    },
    {
      headerName: "pincode",
      field: "pincode",
      width: 100
    },
    {
      headerName: "addrLine1",
      field: "addrLine1",
      width: 100
    },
    {
      headerName: "addrLine2",
      field: "addrLine2",
      width: 100
    },

  ];
    rowData = [
      {
        "id": "",
        "city": "",
        "state": "",
        "country": "",
        "pincode": "",
        "addrLine1": "",
        "addrLine2": ""
      }


    ]
<<<<<<< Updated upstream
/*    onsubmit()
=======
   onsubmit()
>>>>>>> Stashed changes
    {
      console.log('22222222222222222');

      this.addaddress.address.addrLine1=this.addressdata.addrLine1;
      this.addaddress.address.addrLine2=this.addressdata.addrLine2;
      this.addaddress.address.city=this.addressdata.city;
      this.addaddress.address.country=this.addressdata.country;
      this.addaddress.address.pincode= this.addressdata.pincode;
      this.addaddress.address.state =this.addressdata.state;
      this.addaddress.address.user.id=this.userid;

//console.log("request object"+this.addaddress);
      this.http.post(this.addAddressUrl,this.addaddress,httpOptions).subscribe((data:Useraddress) => {
        console.log('data  11111111111111111',data);

        if(data.errorCode == 0)
        {
          localStorage.setItem('isaddedaddress', "true");
          localStorage.setItem('userAddress',JSON.stringify(data.addressLst[0]));
          this.resposeText = "your address added successfully."
          let useraddress : Useraddress;
    useraddress = JSON.parse(localStorage.getItem('userAddress'));
    this.rowData[0].id =  useraddress[0].id;
    this.rowData[0].city =  useraddress[0].city;
    this.rowData[0].state =  useraddress[0].state;
    this.rowData[0].country = useraddress[0].country;
    this.rowData[0].pincode = useraddress[0].pincode;
    this.rowData[0].addrLine1 = useraddress[0].addrLine1;
    this.rowData[0].addrLine2 = useraddress[0].addrLine2;
        }
        else {
           this.resposeText = data.errorDesc;
        }
       });
    }*/

<<<<<<< Updated upstream
}
=======

>>>>>>> Stashed changes
