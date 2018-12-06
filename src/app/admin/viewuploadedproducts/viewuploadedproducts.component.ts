import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../addproduct.service';
import { ProductResponse } from 'src/app/model/productResponce';
import { Product } from 'src/app/model/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viewuploadedproducts',
  templateUrl: './viewuploadedproducts.component.html',
  styleUrls: ['./viewuploadedproducts.component.css']
})
export class ViewuploadedproductsComponent implements OnInit {

  userId = localStorage.getItem('token');
  allProductsArray : Product[];

  constructor(private productservice: AddproductService) { }

  ngOnInit() {

    this.productservice.getAllProductsbyUser(this.userId).subscribe
    (
      (data: ProductResponse) => { this.allProductsArray = data.productResponse;
      console.log('Complete Response',data);
      console.log ('This is Product Resonse :',this.allProductsArray);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);    // SHOW ERRORS IF ANY.
      }
    );

  }

}
