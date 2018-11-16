import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(private http: HttpClient) { 

  }
  
}
