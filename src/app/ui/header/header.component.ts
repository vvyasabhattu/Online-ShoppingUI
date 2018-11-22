import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';
import {Userlist} from '../../model/loginresponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public authService :AuthService) { }

  isLoggedIn : boolean;
  ngOnInit() {

  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
  getUserName():string { 
    let user : Userlist;
   user = JSON.parse(localStorage.getItem('userData'));
   console.log(user);
   return user.firstName;
  }

   isUserLoggedIn(): boolean
   {
     
  return JSON.parse(localStorage.getItem('isLoggedIn'));
    
   }
}