import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //clientID: string = 'PASTE YOUR CLIENT ID';
  //baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
constructor(private http: HttpClient) { }
search(queryString: string) {
    
  }
  searchResult={
    "image":"img/product.jpg",
    "name":"Laptop",
    "price":300
  }
}
