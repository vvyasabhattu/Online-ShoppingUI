import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators,ReactiveFormsModule} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import { AddProductService, CategoryConfig,ProductCategoryResponse } from '../service/addproduct.service';
import { AddnewproductService,CategoryConfig,ProductCategoryResponse} from '../service/addnewproduct.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AddnewproductService]
})
export class ProductComponent implements OnInit {

  /* uploadImageURL : string = "src/assets/image/icons8-upload-96.png"; */

  
  //categoryObject :any;
  formSubmitResponse : any;
  productCategory : string[] = [''];
  serviceMsg:string = '';
  myFiles:string [] = [];
  productForm : FormGroup;
  //private addNewProductUrl='#';
  //private imageUploadURL = 'http://192.168.2.164:9099/product/addProductImg/{product_id}';
  categoryConfig: CategoryConfig;
  productCategory1:CategoryConfig[];
  /* nFileChanged(event) {
    const file = event.target.files[0]} */

    

  constructor(private fb : FormBuilder,
              private http: HttpClient,
              private productService : AddnewproductService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      appOS : ['Windows'],
      appVersion:1.0,
      deviceId : 1.0,
      source : ['Angular'],
      product : this.fb.group({
        brand :['',[Validators.required]],
        product_name : ['',Validators.required],
        description : [''],
        price : [''],
        category : this.fb.group({
          category_id : []
        }),
        user:this.fb.group({
          id:[]
        })  
    })
  })
    this.showProductCategory();
  }

  /* this method sends the form data to the Web API */
  onSubmit(){
    console.log(this.productForm.value);

    var p_id;

    this.productForm.value.product.user.id = 1;
    console.log('user id ',this.productForm.value.product.user.id);
    this.productService.addFormData(this.productForm.value).subscribe
    (
      data => {
        this.formSubmitResponse = JSON.parse(JSON.stringify(data));
        console.log ('This is Product Resonse :',this.formSubmitResponse);
        console.log ('This is Product id :',this.formSubmitResponse.ProductResponse[0].product_id);

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
    this.productService.postImage(imageData ,prod_id.toString()).subscribe(
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

  //this method fetches the Category options from API and display in template
  showProductCategory(){

    this.productService.getAllProductCategories()
    .subscribe(
      (data : ProductCategoryResponse) => {
        console.log('aaaaaaaaaaaaaaa',data);
        this.productCategory1 = data.category;
      } )
}
}
