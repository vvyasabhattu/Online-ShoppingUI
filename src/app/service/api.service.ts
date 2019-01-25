import { Injectable } from '@angular/core';
//http://vgaddam-l-1196:9090/api/user-by-service/user/check

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //localhost check
  //public localUrl:string="http://localhost:9090/api";
  //public dockerUrl:string="http://vgaddam-l-1196:9090/api";
  public baseUrl:string="http://localhost:9090/api";
  //api urls
  public imagePathUrl:string=this.baseUrl+"/product-by-service/";

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
  public imageUploadURL :string = this.baseUrl+"/product-by-service/product/uploadImg/{product_id}";
  public addressListUrl :string = this.baseUrl+"/user-by-service/user/getAddress";
  public addresUpdateUrl :string = this.baseUrl+"/user-by-service/user/updateAddress";
public deleteaddressUrl :string = this.baseUrl+"/user-by-service/user/deleteAddress";
  public getAllProductsByUserURL : string= "/product/byUser";
public deleteproduct :string =  this.baseUrl+"/product-by-service/product/delete";
public updateproduct :string =    this.baseUrl+"/product-by-service/product/update";



//switch server Local or Docker
  // checkServerStatus(){
  //   if(this.localUrl){
  //     this.baseUrl=this.localUrl;
  //   }else{
  //     this.baseUrl=this.dockerUrl;
  //   }
  // }

//switch server Local or Docker
  // checkServerStatus(){
  //   if(this.localUrl){
  //     this.baseUrl=this.localUrl;
  //   }else{
  //     this.baseUrl=this.dockerUrl;
  //   }
  // }

  constructor() {}


   // getBaseUrl(){
   //   return this.baseUrl;
   // }

   //network issue
   public apiResponseStatus(){
     throw ("Response status is 500");
   }

}
