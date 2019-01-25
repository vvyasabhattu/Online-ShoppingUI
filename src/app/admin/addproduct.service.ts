import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { HttpHeaders } from '@angular/common/http';


export interface ProductData
{
  appOS: string;
  appVersion: number;
  deviceId: number;
  source: string;
  category_id: number;
  brand: string;
  description: string;
  price: number;
  product_name: string;
  user_id:number;
  
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
export class AddproductService {

  //baseURL = "http://localhost:9090/";


  constructor(private http : HttpClient,  private apiservice:ApiService) { }


  getAllProductCategories() : Observable<ProductCategoryResponse>{
   return this.http.get<ProductCategoryResponse>(this.apiservice.baseUrl+this.apiservice.categoryURL);
  }

  addFormData(formData:FormData){
    return this.http.post(this.apiservice.baseUrl+this.apiservice.addProductURL,formData);
  }

  postImage(formData:FormData,product_id){
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype':  'multipart/form-data'

      })
    };
    
    return this.http.post(this.apiservice.imageUploadURL+'/'+product_id,formData,{responseType: 'text'});
  }


  getAllProductsbyUser(userid){
    return this.http.get(this.apiservice.baseUrl+this.apiservice.getAllProductsByUserURL+'/'+userid,{responseType: 'json'});
  }

  


}