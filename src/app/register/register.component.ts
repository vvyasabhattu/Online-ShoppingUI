import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/model/user';
import { RegisterService } from 'src/app/service/register.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Userdetail} from '../model/registrationres';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';



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
  isUserRegistered:boolean=false;
public fname:string;
 public lname:string;
public email1:string;
//public render:boolean=false;
public visible :boolean =false;
public show:boolean = true;
  constructor(private http: HttpClient,private apiService:ApiService,private socialAuthService: AuthService,
    private router: Router    ) { }

  public usermodel = new Users('','','','','');

  //private userRegistrationUrl='http://localhost:9090/api/user-by-service/user/register';
  private userRegistrationUrl=this.apiService.userRegistrationUrl;
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
            this.isUserRegistered=true;
            setTimeout( ()=>{this.isUserRegistered=false,3000});
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

public socialSignIn(socialPlatform : string) {
  let socialPlatformProvider;
  if(socialPlatform == "facebook"){
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  }else if(socialPlatform == "google"){
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  } 
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform+" sign in data : " , userData);
   //localStorage.setItem('socialuser',JSON.stringify(userData));
this.fname =  userData.name;
  this.lname = userData.name;
 this.email1 = userData.email;
      console.log("hiii", this.email1);
     //this.router.navigate['gmailuser'];
    // this.router.navigate(['../gmailuser']);
    }
    );

  }
  handler()
  {
    this.visible = true;
    this.show = false;
  }
}
