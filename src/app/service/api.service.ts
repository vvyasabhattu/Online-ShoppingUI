import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //localhost check
    public baseUrl:string="http://localhost:9090/api";
  //api urls
  //public baseUrl:string="http://vgaddam-l-1196:9090/api";
  public productUrl:string=this.baseUrl+"/product-by-service/product/all";
  public userUrl:string=this.baseUrl+"/user-by-service/";
  public aboutUrl:string=this.baseUrl+"/about";
  public loginUrl:string=this.baseUrl+"/user-by-service/user/login";
  public userRegistrationUrl:string=this.baseUrl+"/user-by-service/user/register";


  constructor() {}


   // getBaseUrl(){
   //   return this.baseUrl;
   // }

   //network issue
   public apiResponseStatus(){
     throw ("Response status is 500");
   }

}
