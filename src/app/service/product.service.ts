import { Injectable } from '@angular/core';
import { Product } from '../model/product';
// import Http classes
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


//define header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private productUrl= 'http://localhost:9090/api/product-by-service/product/all';

  constructor(
    private httpClient:HttpClient) {

    }



  getAllProduct(): Observable<Product>  {

       return   this.httpClient.get<Product>(this.productUrl);
  }
  //handle errors






  // product:Product[] = [
  //   {"imageurl":'/assets/img/bike-2.jpg',  "productName":"product1", "price":"Rs600","productId":123},
  //   {"imageurl":'/assets/img/bike-2.jpg', "productName":"product2", "price":"Rs300","productId":111},
  //   {"imageurl":'/assets/img/bike-2.jpg', "productName":"product3", "price":"Rs300","productId":222},
  //   {"imageurl":'/assets/img/bike-2.jpg', "productName":"product4", "price":"Rs400","productId":333},
  //
  // ];

  // getAllProduct():Product[]{
  //   return this.product;
  // }
}
