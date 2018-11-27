import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {Observable} from 'rxjs';


export interface ProductData{
  appOS: string;
  appVersion: number;
  deviceId: number;
  source: string;
  category_id: number;
  brand: string;
  description: string;
  price: number;
  product_name: string;
  id:number;
  /* "user": {
  "id": 1
  } */
}

export interface CategoryConfig {
  category_id: number;
  category_name: string;
}

export interface ProductCategoryResponse{
  category : CategoryConfig[];
   errorCode: number;
  errorDesc: string;
  errorType: string
}

@Injectable({
  providedIn: 'root'
})
export class AddnewproductService {

  baseURL = "http://localhost:9090/";
  categoryURL : string = "/api/product-by-service/category";
  addProductURL : string = "/api/product-by-service/product/add";
  imageUploadURL :string = "/api/product-by-service/product/uploadImg";

  constructor(private http : HttpClient) { }


  getAllProductCategories() : Observable<ProductCategoryResponse>{
   return this.http.get<ProductCategoryResponse>(this.baseURL+this.categoryURL);
  }

  addFormData(formData:FormData){
    return this.http.post(this.baseURL+this.addProductURL,formData);
  }

  postImage(formData:FormData,user_id:string){
    return this.http.post(this.baseURL+this.imageUploadURL+'/'+user_id,formData);
  }
}
