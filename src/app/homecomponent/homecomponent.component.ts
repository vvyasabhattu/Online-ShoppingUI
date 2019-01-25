import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ApiService } from '../service/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})

export class HomecomponentComponent implements OnInit {
  //imagePath=this.apiService.imagePathUrl;
  //slider images
    images = ["./assets/img/head1.png","./assets/img/head2.jpg","./assets/img/head3.jpg"];

  Products:Product []=[];
  constructor(private productService:ProductService,private apiService:ApiService,private router:Router) { }

public cartList =[];
public wishList = [];
public wishnumber: number;
  //private apiService:ApiService=new ApiService();
  ngOnInit() {

    //set the product size to local Product Array
    this.getAllProductList();
 //   console.log(this.imagePath);

  }

  //fetching from product service
  getAllProductList(){
       this.productService.getAllProduct()
       .subscribe(data=>{ console.log(data);
                          this.Products=data.productResponse;
                        }   );

  }

    view(products:Product) {
      console.log("view products");
      console.log(products);

    }
    addcart(products:Product){
        console.log("addcart");
        this.addproduct(products,this.cartList);
        console.log(this.cartList);
        console.log(this.cartList.length);
        localStorage.setItem('cart', "this.cartList");
        localStorage.setItem('cartlength', "this.cartList.length");
    }

    wishlist(products:Product){
      console.log("wishlist");
      this.addproduct(products,this.wishList);
    //  console.log(this.wishList);
      console.log(this.wishList.length);
this.wishnumber= this.wishList.length;
       localStorage.setItem('wishlst', "this.wishList");
       localStorage.setItem('wishlength', "this.wishnumber");
       
    }
    addproduct(products:Product,array:Product []){
        length =array.length;
        array[length] = products;
    }
    //routing to single product component
    onRoutingProduct(product:Product){
       this.router.navigate(['/product',product.product_id]);
    }
    //filter products
    searchText="";
    filterProduct(products){
      return products.product_name.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
    }

}
