import { Component, OnInit } from '@angular/core';
//import { AddproductService } from '../addproduct.service';
import { ProductService } from '../../service/product.service';
import { ProductResponse } from 'src/app/model/productResponce';
import { Product } from 'src/app/model/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from "../../service/api.service";
import {Router} from '@angular/router';
import { Productreq} from '../../model/productreq';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Productres} from '../../model/deleteproductres';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { AddproductService,CategoryConfig,ProductCategoryResponse} from '../addproduct.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
   
  })
};

@Component({
  selector: 'app-viewuploadedproducts',
  templateUrl: './viewuploadedproducts.component.html',
  styleUrls: ['./viewuploadedproducts.component.css']
})


export class ViewuploadedproductsComponent implements OnInit {
// user token
  userId = localStorage.getItem('token');

//data models
  formSubmitResponse : any;
  Products:Product []=[] ;
  public deleteproductdata:Product;
  public action : string = "save";
  productForm : FormGroup;
  myFiles:string [] = [];
  serviceMsg:string = '';
  productCategory1:CategoryConfig[];
  //service APIS
  public deleteproducts :string =this.apiService.deleteproduct;
  public updateproduct =this.apiService.updateproduct;


  constructor(private fb : FormBuilder,  private productServices : AddproductService,
    private productService:ProductService,private apiService:ApiService,
    private router:Router,private http: HttpClient) 
    { 

    }
    
  public id  = localStorage.getItem('token');

  ngOnInit()
  {
    //GET all product list from db
    this.getAllProductList();

    this.productForm = this.fb.group({
      appOS : ['Windows'],
      appVersion:1.0,
      deviceId : 1.0,
      source : ['Angular'],
      product: this.fb.group({
        brand :['',[Validators.required]],
        product_name : ['',Validators.required],
        description : [''],
        price : [''],
        qty:['',Validators.required],
        user_id: this.id,
        category : this.fb.group({
          category_id : [],
         
        }),
      
      
/*user:this.fb.group({
          id:[]
        }) */ 
    })
  })
    this.showProductCategory();
 }
 


"deleteuserproduct" = {
  "appOS": "angular",
  "appVersion": "1.0",
  "deviceId": "13",
  "source": "web",
  "product": {
    
      "product_id": 0,
  
    
         "user_id": 0
   
  }
  
}

"updateproducts" = 
{
  "appOS": "angular",
  "appVersion": "1.0",
  "deviceId": "13",
  "source": "web",
  "product": {
      "product_id" : 2,
	  "qty":100,
	  "user_id": 3
  }
}

  getAllProductList(){
    this.productService.getAllProduct()
    .subscribe(data=>{ console.log(data);
                       this.Products=data.productResponse;
                       console.log("prrrgetalls",this.Products);
                      // console.log("prrr",this.Products[0].brand);
                     }   );


  }
  editproduct(product:Productreq)
  {
    
   console.log("prrrr", product);
    this.action = "edit";
   }

 
  deleteuserproducts(product:Productreq)
  {
    //console.log("prrrrdel", deleteproductdata);
  
  

    this.deleteuserproduct.product.user_id = JSON.parse(this. userId);
    this.deleteuserproduct.product.product_id =  product.product_id;
    this.http.put(this.apiService.deleteproduct, this.deleteuserproduct,httpOptions).subscribe((data:Productres)=>
    {
      if(data.errorCode == 0)
         {
        
          this.getAllProductList();
          alert("user product deleted");
         // location.reload();
        
         
     }
    });
  }
  showProductCategory(){

    this.productServices.getAllProductCategories()
    .subscribe(
      (data : ProductCategoryResponse) => {
        console.log('aaaaaaaaaaaaaaa',data);
        this.productCategory1 = data.category;
      } )
}
someProducts()
{
  if(this.action == "save"){
    this.onSubmit();
   
   }else{
 
   this.updateProductDetails();
   }
}
onSubmit(){
  console.log(this.productForm.value);

  var resArray ;

  //this.productForm.value.product.user.id = 1;
  //console.log('user id ',this.productForm.value.product.user.id);
  this.productServices.addFormData(this.productForm.value).subscribe
  (
    data => {
      this.formSubmitResponse = JSON.parse(JSON.stringify(data));
      //resArray = this.formSubmitResponse.ProductResponse[0];
      console.log('Array Of Product Response',resArray);
      console.log ('This is Product Resonse :',this.formSubmitResponse);
      //console.log ('This is Product id :',this.formSubmitResponse.ProductResponse[0].product_id);

    },
    (err: HttpErrorResponse) => {
      console.log (err.message);    // SHOW ERRORS IF ANY.
    }
  );

  //return this.http.post(this.addNewProductUrl,this.productForm.value);



}
  /* this method selects all multiple files */
  getFileDetails (event) {
    //console.log (e.target.files);
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
    }
  }

  /* this method appends the selected files and sends it to Web API */
  uploadFiles(){
    var imageData = new FormData();
    var prod_id = this.formSubmitResponse;
    //var user_id =46;
for (var i = 0; i < this.myFiles.length; i++) { 
      imageData.append("fileUpload", this.myFiles[i]);
      //imageData.append("prod_id",prod_id.toString());
    }

    console.log("on image upload"+imageData.getAll('fileupload'));
    console.log("on image upload"+imageData.getAll('user_id'));
   // this.http.post(this.apiservice.baseUrl+this.apiservice.imageUploadURL+'/'+product_id,formData,{responseType: 'text'});
    this.productServices.postImage(imageData ,prod_id.toString()).subscribe(
    data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.serviceMsg = data as string;
        console.log (this.serviceMsg);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);    // SHOW ERRORS IF ANY.
      }
    );

  }
  updateProductDetails()
  {
    var resArray ;

    //this.productForm.value.product.user.id = 1;
    //console.log('user id ',this.productForm.value.product.user.id);
    this.http.put(this.apiService.deleteproduct,this.updateproducts,httpOptions).subscribe((data => {
        this.formSubmitResponse = JSON.parse(JSON.stringify(data));
        //resArray = this.formSubmitResponse.ProductResponse[0];
        console.log('Array Of Product Response',resArray);
        console.log ('This is Product Resonse :',this.formSubmitResponse);
        //console.log ('This is Product id :',this.formSubmitResponse.ProductResponse[0].product_id);
  
      }));
      //return this.http.post(this.addNewProductUrl,this.productForm.value);
  
  }

}