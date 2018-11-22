import { Component, OnInit } from '@angular/core';
import {Userlist} from '../model/loginresponse';

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

  update: any = {};
  
  constructor() {
    let user : Userlist;
    user = JSON.parse(localStorage.getItem('userData'));
    this.update.fname = user.firstName;
    this.update.lname = user.lastName;
    this.update.mail = user.email;
    this.update.mobilenumber  = user.contactNumber;
    this.update.username = user.firstName;
   }



//public update = new Updatedata('','','','','');
ngOnInit() {
  }

 

  getData():void { 
      let user : Userlist;
   user = JSON.parse(localStorage.getItem('userData'));
   console.log(user);

  } 
}
