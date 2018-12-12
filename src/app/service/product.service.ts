import { Injectable } from '@angular/core';
import { Product } from '../model/product';
// import Http classes
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ProductResponse } from '../model/productResponce';


//define header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productUrl= 'http://localhost:9090/api/product-by-service/product/all';
private productUrl= this.apiService.productUrl;
private productById= this.apiService.productById;

    //productListView
   public products:any =[];


   public cartList:Product[] = [];
   public wishList:Product[] = [];

   //remove it later
   public cartListSize=this.cartList.length;
   public wishListSize=this.wishList.length;



  constructor(
    private httpClient:HttpClient,private apiService:ApiService) {
      // //temp
      // this.products=this.getAllProduct().subscribe( data=> {
      //   this.products=data;
      // });
      console.log("product service .....")
      console.log(this.products);


    }
  //fetch product from server

  getAllProduct(): Observable<ProductResponse>  {
        //end temp
       return   this.httpClient.get<ProductResponse>(this.productUrl);
  }
  //fetch product from server by product id for single product component

  getProductById(id:any): Observable<ProductResponse>  {
        //end temp
       return   this.httpClient.get<ProductResponse>(this.productById+id);
  }


    //fetching from product service
    // getAllProductList2(){
    //      this.getAllProduct()
    //      .subscribe(data=>{ console.log(data["productResponse"]);
    //                         this.products=data["productResponse"];
    //                       }   );
    //       console.log(this.products);
    //     return this.products;
    // }
  





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
