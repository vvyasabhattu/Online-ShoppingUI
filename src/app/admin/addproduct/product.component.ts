import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AddproductService,CategoryConfig,ProductCategoryResponse} from '../addproduct.service';
import { ProductResponse } from 'src/app/model/productResponce';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AddproductService]
})
export class AddproductComponent implements OnInit {

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  successMsg :string;
  userId = localStorage.getItem('token');
  formSubmitResponse : any;
  productCategory : string[] = [''];
  serviceMsg:string = '';
  myFiles:File;
  productForm : FormGroup;
  categoryConfig: CategoryConfig;
  productCategory1:CategoryConfig[];

  constructor(private fb : FormBuilder,
              private productService : AddproductService) { }

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
        price : ['',Validators.required],
        category : this.fb.group({
          category_id : ['',Validators.required]
        }),
        user:this.fb.group({
          id:[]
        })  
    })
  })
    this.showProductCategory();
    this.getUrl();
  }

  getUrl()
{
  return "url('src/assets/img/productimage.jpg')";
}

  /* this method sends the form data to the Web API */
  onSubmit(){

    
    console.log(this.productForm.value);
    console.log("this is the user idddddddddddddddddd",this.userId);
    this.productForm.value.product.user.id = this.userId;
    console.log('user id ',this.productForm.value.product.user.id);


    this.productService.addFormData(this.productForm.value).toPromise().then(
      (data : ProductResponse) => {
        this.formSubmitResponse = data.productResponse[0].product_id;
        //resArray = this.formSubmitResponse.ProductResponse[0];
        console.log('Complete Response',data);
        console.log ('This is Product Resonse :',this.formSubmitResponse);
        
        if(data.productResponse != null)
        {
          /* alert("Product Details Saved Successfully..!! Please Upload Images !!")
          this.productForm.reset(); */
          this.successMsg = 'Product Details successfully saved';
        }
        else{
          alert("Some Error...Please try again!!!")
        }
        //console.log ('This is Product id :',this.formSubmitResponse.ProductResponse[0].product_id);

      }
      
    );
    
    /* this.productService.addFormData(this.productForm.value).subscribe
    (
      (data : ProductResponse) => {

        this.delay(3000);
    
        this.formSubmitResponse = data.productResponse[0].product_id;
        //resArray = this.formSubmitResponse.ProductResponse[0];
        console.log('Complete Response',data);
        console.log ('This is Product Resonse :',this.formSubmitResponse);
        
        if(data.productResponse != null)
        {
          status = "success";
        }
        //console.log ('This is Product id :',this.formSubmitResponse.ProductResponse[0].product_id);

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);    // SHOW ERRORS IF ANY.
      }
    );
 */
    

        
  }

  /* this method selects all multiple files */
  getFileDetails (event) {
    //console.log (e.target.files);
    /* for (var i = 0; i < event.target.files.length; i++) { 
      let file = <File> event.target.files[i];
      this.myFiles.push(file);
    } */

    this.myFiles= <File> event.target.files[0];
  }

  /* this method appends the selected files and sends it to Web API */
  uploadFiles(){
    var imageData = new FormData();
    var prod_id = this.formSubmitResponse;
    //var prod_id = 72;

    /* for (var i = 0; i < this.myFiles.length; i++) { 
      imageData.append("image", this.myFiles[0],this.myFiles[0].name);
    } */
    imageData.append("file", this.myFiles);
    //imageData.append( "productId","72","productId");
    console.log("on image upload"+imageData.getAll('fileupload'));
    console.log("on image upload"+imageData.getAll('user_id'));
    console.log("Image for Product Id :",prod_id);

    

    this.productService.postImage(imageData,prod_id).subscribe(
    (data : string) => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        //this.serviceMsg = data.errorDesc;
        console.log ('1111111111111',data);
        if(data != null)
        {
          status = "success";
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);    // SHOW ERRORS IF ANY.
      }
    );

    if(status == "success"){
      
      alert("Product Images Saved Successfully..!!")
      
    }
    else{
      alert("Some Error...Please Upload again!!!");
    }

  }

  //this method fetches the Category options from API and display in template
  showProductCategory(){

    this.productService.getAllProductCategories()
    .subscribe(
      (data : ProductCategoryResponse) => {
        console.log('Category Response',data);
        this.productCategory1 = data.category;
      } )
}

viewUploadedProduct(){

}

}
