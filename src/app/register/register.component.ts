import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/user';
import { RegisterService } from 'src/app/service/register.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Userdetail} from '../model/registrationres';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'    
  })
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private regdata =[];
  public resposeText :string = null;
  constructor(private http: HttpClient) { }

  public usermodel = new Users('','','','','');
 
  //private userRegistrationUrl='http://localhost:9090/api/user-by-service/user/register';
  private userRegistrationUrl='http://vgaddam-l-1196:9090/api/user-by-service/user/register';
  "userobject"= {
    "appOS": "string",
    "appVersion": "string",
    "deviceId": "string",
    "source": "string",
    "user": {
      "addressLst": [
        {
          "addrLine1": "string",
          "addrLine2": "string",
          "city": "string",
          "country": "string",
          "createdDate": "string",
          "createdUser": "string",
          "id": 0,
          "pincode": 0,
          "state": "string",
          "updatedDate": "string",
          "updatedUser": "string"
        }
      ],
      "contactNumber": "",
      "createdDate": "",
      "createdUser": "",
      "email": "",
      "firstName": "",
      "id": 0,
      "lastName": "",
      "password": "",
      "roleLst": [
        {
          "createdDate": "string",
          "createdUser": "string",
          "id": 0,
          "role": "ADMIN",
          "updatedDate": "string",
          "updatedUser": "string"
        }
      ],
      "updatedDate": "string",
      "updatedUser": "string"
    }
  }
  

  ngOnInit() {

  }

  onsubmit()
  {

    this.userobject.user.firstName=this.usermodel.firstName;
  this.userobject.user.lastName=this.usermodel.lastName;
  this.userobject.user.email=this.usermodel.email;
  this.userobject.user.password=this.usermodel.password;
  this.userobject.user.contactNumber=this.usermodel.contactNumber;

   //console.log(this.userobject);
  
   this.http.post(this.userRegistrationUrl,this.userobject,httpOptions).subscribe((data:Userdetail) => {
          console.log('data',data);
          console.log('errorCode',data.errorCode);
          if(data.errorCode == 0)
          {
            this.resposeText = "user registered successfully."
          }
          else if(data.errorCode == 1001){
             this.resposeText = data.errorDesc; 
          }
          else if(data.errorCode == 1002)
          {
            this.resposeText = data.errorDesc; 
          }
          else if(data.errorCode == 1003)
          {
            this.resposeText = data.errorDesc; 
          }
           else if(data.errorCode == 1004)
          {
            this.resposeText = data.errorDesc; 
          }
          else if(data.errorCode == 1005)
          {
            this.resposeText = data.errorDesc; 
          }
         
          else if(data.errorCode == 1006)
          {
            this.resposeText = data.errorDesc; 
          }
         
         
   });
               
   
                                                                

  
}
}
