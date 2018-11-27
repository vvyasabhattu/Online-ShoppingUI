import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {Login } from 'src/app/model/loginmodel';
import {LoginService} from 'src/app/service/login.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Userdetails } from '../model/loginresponse';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private regdata =[];
private resposeText:string = null;
//@Output() public childEvent = new EventEmitter();

 // store the URL so we can redirect after logging in
 public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router,private apiService:ApiService) {

  }



  public login = new Login('','');

private loginUrl=this.apiService.loginUrl;

  "userobject"= {

      "appOS": "string",
      "appVersion": "string",
      "deviceId": "string",
      "source": "string",
      "user": {
        "email": "string",
        "password": "string"

      }
    }

  ngOnInit() {
  }


  onsubmit()
  {
this.userobject.user.email=this.login.email;
    this.userobject.user.password=this.login.password;

console.log(this.http.post(this.loginUrl,this.userobject, httpOptions).subscribe((data:Userdetails)=>{
   console.log('data',data);
   console.log('errorCode',data.errorCode);
  if (data.errorCode == 0)
  {
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('userData',JSON.stringify(data.userLst[0]));
    //this.childEvent.emit(localStorage.getItem('userData'));
    localStorage.setItem('token',JSON.stringify( data.userLst[0].id));
    this.router.navigate(['']);
    this.resposeText = "user login succeessfully";
  }
  else{
     this.resposeText = data.errorDesc;
  }

}

   ));




  }
}
