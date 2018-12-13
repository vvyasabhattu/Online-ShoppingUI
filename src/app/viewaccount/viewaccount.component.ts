import { Component, OnInit } from '@angular/core';
import {Userlist} from '../model/loginresponse';
import { ApiService } from '../service/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Userdetails } from '../model/updateresponse';
import { Userdetail } from '../model/getuserresponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit {
public fname ;
public lname;
public mail;
public mobilenumber;
public username;
public id;
  update: any = {};
public getdata;
 

  constructor(private http: HttpClient, private router: Router,private apiService:ApiService) {
  
   let user : Userlist;
user = JSON.parse(localStorage.getItem('userData'));
console.log('user object in local storage ',user);
    this.update.fname = user.firstName;
    this.update.lname = user.lastName;
    this.update.mail = user.email;
    this.update.mobilenumber  = user.contactNumber;
    this.update.username = user.firstName;
    this.update.id = user.id;
   }
   private resposeText:string ;
   private updateprofileUrl=this.apiService.updateprofileUrl; 
  private getuserUrl =this.apiService.getuserUrl; 
  
   "userobject"= {

    "appOS": "string",
    "appVersion": "string",
    "deviceId": "string",
    "source": "string",
    "user": 
    {
      "id": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "contactNumber":"string"
    }
  }

 "getuser"= {

    "appOS": "string",
    "appVersion": "string",
    "deviceId": "string",
    "source": "string",
    "user": {
      
      "id": "string"
    
    }
      
  } 
//public update = new Updatedata('','','','','');
ngOnInit() {
  let user : Userlist;
user = JSON.parse(localStorage.getItem('userData'));
console.log('user object in local storage ',user);
  }

 

  getData():void { 
      let user : Userlist;
   user = JSON.parse(localStorage.getItem('userData'));
   console.log(user);

  } 
 
  onsubmit()
  {
    
    this.userobject.user.id = this.update.id;
    this.userobject.user.firstName=this.update.fname;
    this.userobject.user.lastName=this.update.lname;
    this.userobject.user.email=this.update.mail; 
    this.userobject.user.contactNumber = this.update.mobilenumber;
    this.getuser.user.id = this.update.id;
    this.http.post(this.updateprofileUrl,this.userobject, httpOptions).subscribe((data:Userdetails)=>{
      console.log('data',data);
      console.log('errorCode',data.errorCode);
     if (data.errorCode== 0)
      {
        localStorage.setItem('isUpdated', "true");
        localStorage.setItem('userData',JSON.stringify(data.userLst[0]));
        //this.childEvent.emit(localStorage.getItem('userData'));
        localStorage.setItem('token',JSON.stringify( data.userLst[0].id));
        
        this.router.navigate(['/viewAccount']);
         this.resposeText = "your profile Updated succeessfully";
      }
      else{
        this.resposeText = data.errorDesc;
     }
   

  }
 
)
}
isvalid(): boolean
{
 
return JSON.parse(localStorage.getItem('isUpdated')); 
}
}
