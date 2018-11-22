import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})

export class HomecomponentComponent implements OnInit {
  Products:Product []=[];
  constructor(private productService:ProductService ) {
    //fetching from product service
     this.productService.getAllProduct().subscribe(
      data=>{
                console.log(data["productResponse"]);
                
              this.Products=data["productResponse"];

            }
    );
 }

cartList =[];
wishList = [];

  ngOnInit() {
    //console.log(this.Products);
  }


  view(products)
  {
console.log("view products");
console.log(products);

  }
addcart(products)
{
  console.log("addcart");
  this.addproduct(products,this.cartList);
  console.log(this.cartList);

}

wishlist(products)
{
  console.log("wishlist");
  this.addproduct(products,this.wishList);
  console.log(this.wishList);

}
addproduct(products,array)
{
length =array.length;
array[length] = products;
}

}
