import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientID: string = 'PAST YOUR CLIENT ID';
  baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }
}
