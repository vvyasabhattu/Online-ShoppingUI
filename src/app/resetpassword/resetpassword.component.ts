import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  private resetpassword;

  ngOnInit() {
   this.resetpassword = this.fb.group(
      {
        email : ['',Validators.required]
      }
    );
  }

}
