import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})

export class HomecomponentComponent implements OnInit {

  constructor() { }

  Product = [
    {"imageurl":'src/assets/img/bike-2.jpg',  "productName":"product1", "price":"Rs600","productId":123},
    {"imageurl":'src/assets/img/bike-2.jpg', "productName":"product2", "price":"Rs300","productId":111},
    {"imageurl":'src/assets/img/bike-2.jpg', "productName":"product3", "price":"Rs300","productId":222},
    {"imageurl":'src/assets/img/bike-2.jpg', "productName":"product4", "price":"Rs400","productId":333},
  
  ];
  
cartList =[];
wishList = [];

  ngOnInit() {
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
