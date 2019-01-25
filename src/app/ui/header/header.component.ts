import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';
import {Userlist} from '../../model/loginresponse';
import { HomecomponentComponent } from '../../homecomponent/homecomponent.component';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    cartListSize:number=0;
    wishListSize:number=0;
   // cartnumber:number =0;
    //wishnumber:number= 0;
    //public wishnumber:number;
   // cartlengthdata:number= 0;

  constructor(private router: Router,public authService :AuthService,private productService:ProductService) {
  

}
  role:string;
  isLoggedIn : boolean;
  ngOnInit() {
      //cart and wishList size fetching from product service
     // this.cartListSize=this.productService.cartListSize;
      //this.wishListSize=this.productService.wishListSize;
   
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
   //this.role=user.roleLst[0]["role"];
   //console.log(user.roleLst[0]["role"]);
   return user.firstName;
  }

   isUserLoggedIn(): boolean
   {

  return JSON.parse(localStorage.getItem('isLoggedIn'));

   }
   //admin check

   isAdmin(): boolean{
     if(this.role=="Seller" || this.role=="admin") return true;
     else false;
   }
 
}
