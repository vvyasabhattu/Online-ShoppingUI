import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute } from "@angular/router";
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers:[NgbCarouselConfig,ProductService] // add NgbCarouselConfig to the component providers
})
export class SingleProductComponent implements OnInit {
//images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
public imageUrl=this.apiService.imagePathUrl;
  images = ["assets/img/laptop1.jpg","assets/img/laptop2.jpg","assets/img/laptop3.jpg"];

  private product:Product;
  constructor(private config: NgbCarouselConfig ,private route:ActivatedRoute,private productService:ProductService,private apiService:ApiService) {
    // customize default values of carousels used by this component tree
     config.interval = 3000;
     config.wrap = false;
     config.keyboard = false;
     config.pauseOnHover = false;
      config.showNavigationIndicators = false;

  }
  public productId;

  ngOnInit() {
    //fetch value from app-routing
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId=id;
    this.productDetails(this.productId);
    // this.product={
    //             "product_id": 1,
    //             "product_name": "vivo",
    //             "seller_id": 1,
    //             "img_path": "images\\1",
    //             "price": 7777,
    //             "description": "string",
    //             "is_deleted": "yes",
    //             "brand": "vivo",
    //             "category": {
    //             "category_id": 11,
    //             "category_name": "Mobiles, Computers"
    //                 }
    //             }
    console.log("product....",this.product);
  }

  productDetails(id:any){
    console.log(this.productId);
    //temp
    this.productService.getProductById(id).subscribe((data)=>this.product=data.productResponse[0]);

  }

}
