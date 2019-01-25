import { Component, OnInit, Input } from '@angular/core';
import { SocialUser } from '../model/socialuserresponse';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { GmailUser} from '../model/gmailreq';

import {Userdetail} from '../model/registrationres';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-gmailuser',
  templateUrl: './gmailuser.component.html',
  styleUrls: ['./gmailuser.component.css']
})
export class GmailuserComponent implements OnInit {

 @Input() public gname:number;
 @Input() public glname:number;
 @Input() public mail:string;
  public mobilnumber:number;
  public password:string;
  public visible : boolean;
 private userRegistrationUrl=this.apiService.userRegistrationUrl;
public gmailuser = new GmailUser('','');

public resposeText :string = null;
  isUserRegistered:boolean=false;
  constructor(private socialAuthService: AuthService,private http: HttpClient,private apiService:ApiService,    private router: Router ) {
          //let socialuser : SocialUser;
 //socialuser = JSON.parse(localStorage.getItem('socialuser'));
  // this.gname= socialuser.name;
   //this.glname = socialuser.name;
  //this.mail= socialuser.email;
//console.log("hi"+this.gname);
      
   }
  
  
  ngOnInit()
{
  }

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


//   public socialSignIn(socialPlatform : string) {
//     let socialPlatformProvider;
//     if(socialPlatform == "facebook"){
//       socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
//     }else if(socialPlatform == "google"){
//       socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
//     } 
//     this.socialAuthService.signIn(socialPlatformProvider).then(
//       (userData) => {
//         console.log(socialPlatform+" sign in data : " , userData);
//    this.userobject.user.firstName=userData.name;
//   this.userobject.user.lastName=userData.name;
//   this.userobject.user.email=userData.email;
//  // this.userobject.user.password=this.usermodel.password;
//  // this.userobject.user.contactNumber=this.usermodel.contactNumber;
 
    //  }
    //  );
    //}
   
onsubmit()
{
  this.userobject.user.firstName=""+this.gname;
  this.userobject.user.lastName=""+this.glname;
  this.userobject.user.email=this.mail;
  this.userobject.user.password=this.gmailuser.password;
  this.userobject.user.contactNumber=this.gmailuser.mobilenumber;
   this.http.post(this.userRegistrationUrl,this.userobject,httpOptions).subscribe((data:Userdetail) => {
          console.log('data',data);
          console.log('errorCode',data.errorCode);
          if(data.errorCode==0)
          {
            this.resposeText = "user registered successfully."
            this.isUserRegistered=true;
            setTimeout( ()=>{this.isUserRegistered=false,1000});
         this.router.navigate(['../login']);
          }
            else
          {
            this.resposeText = data.errorDesc;
             //setTimeout( ()=>{this.isUserRegistered=false,1000});
                 //this.router.navigate(['../register']);
                  setTimeout(this.resposeText,2000);
                 // this.router.navigate(['../register']);
          }

   });
}

}
