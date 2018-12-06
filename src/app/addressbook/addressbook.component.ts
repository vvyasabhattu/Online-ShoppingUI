import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import { Addressreq } from '../model/addressreq';
import { ApiService } from '../service/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Useraddress } from '../model/addressrespone';
import { Userdetail } from '../model/getuserresponse';
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

  private addAddressUrl=this.apiService.addAddressUrl;
  public resposeText : string;
  public userid:string;
addressdata = new Addressreq('','','','','','');

  ngOnInit() {
      this.getAddressList();
  }


  constructor(private http: HttpClient,private apiService:ApiService) {
    this.userid  = localStorage.getItem('token');
  console.log(this.userid);

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
   }
//delete address
  deleteAddress(address:Addressreq){
    console.log('Address deleted..'+address);
  }
//update Address
  updateAddress(){
    console.log('Update Address');
    this.http.post(this.apiService.addresUpdateUrl,this.addressdata).subscribe( (data:AddressResponse)=>
      {console.log(data);
         this.addressList=data;
      });
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






    columnDefs = [
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
/*    onsubmit()
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

}
