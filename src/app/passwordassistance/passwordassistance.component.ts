import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-passwordassistance',
  templateUrl: './passwordassistance.component.html',
  styleUrls: ['./passwordassistance.component.css']
})
export class PasswordassistanceComponent implements OnInit {
  hide = true;
  public resetpasssword;
  resetpasswordFormGroup: FormGroup;
  ngOnInit() {
  }

  constructor(private fb: FormBuilder) {

   }
 resetpassword = this.fb.group({
    password:['',Validators.required],
    confirmpassword:['',Validators.required]

 });

onsubmit()
{

}
 
 

}
