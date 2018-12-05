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
  public userRegistrationUrl:string=this.baseUrl+"/user-by-service/user/registerUser";
  public updateprofileUrl:string=this.baseUrl+"/user-by-service/user/updateUser";
  public getuserUrl:string = this.baseUrl+"/user-by-service/user/getUser";
  public addAddressUrl:string = this.baseUrl+"/user-by-service/user/addAddress";
  public productById:string=this.baseUrl+"/product-by-service/product/";
  public categoryURL : string = "/product-by-service/category";
  public addProductURL : string = "/product-by-service/product/add";
  public imageUploadURL :string = "/product-by-service/product/uploadImg";
  public addressListUrl :string = this.baseUrl+"/user-by-service/user/getAddress";





  constructor() {}


   // getBaseUrl(){
   //   return this.baseUrl;
   // }

   //network issue
   public apiResponseStatus(){
     throw ("Response status is 500");
   }

}
