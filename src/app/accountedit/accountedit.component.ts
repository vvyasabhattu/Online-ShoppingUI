import { Component, OnInit } from '@angular/core';
import {Userlist} from '../model/loginresponse';

@Component({
  selector: 'app-accountedit',
  templateUrl: './accountedit.component.html',
  styleUrls: ['./accountedit.component.css']
})
export class AccounteditComponent implements OnInit {
  
  public fname ;
  public lname;
  public mail;
  public mobilenumber;
  public username;

    update: any = {};
    //this.resposeText = "your profile Updated succeessfully";
    constructor() {
      let user : Userlist;
      user = JSON.parse(localStorage.getItem('userData'));
      
      this.update.fname = user.firstName;
      this.update.lname = user.lastName;
      this.update.mail = user.email;
      this.update.mobilenumber  = user.contactNumber;
      this.update.username = user.firstName;
    }
    
  ngOnInit() {
  }


  getData():void { 
    let user : Userlist;
 user = JSON.parse(localStorage.getItem('userData'));
 console.log(user);

} 

}
