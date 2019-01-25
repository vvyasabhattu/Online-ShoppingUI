import { Component, OnInit } from '@angular/core';
import {Userlist} from '../../model/loginresponse';
@Component({
  selector: 'app-mainadminpage',
  templateUrl: './mainadminpage.component.html',
  styleUrls: ['./mainadminpage.component.css']
})
export class MainadminpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


getUserName():string {
  let user : Userlist;
 user = JSON.parse(localStorage.getItem('userData'));
 console.log(user);
 //this.role=user.roleLst[0]["role"];
 //console.log(user.roleLst[0]["role"]);
 return user.firstName;
}
}