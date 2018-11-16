import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from 'src/app/model/user';
import { Observable } from 'rxjs';
import { Userdetail } from 'src/app/model/registrationres';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 /* http://192.168.0.61:9090/api/user-service/user/register*/
    


  constructor(private http: HttpClient) { }

  
}