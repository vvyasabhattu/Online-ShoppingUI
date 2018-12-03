import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[] = [{"name":"shoes 1","age":"12","image":"./assets/img/d1.jpg"},
  {"name":"xxxshoes 2","age":"12","image":"./assets/img/d2.jpg"},
  {"name":"tshoes 3","age":"21","image":"./assets/img/d3.jpg"}

];
 queryField: FormControl = new FormControl();
 constructor(private _searchService: SearchService) { }
 ngOnInit() {
   //   this.queryField.valueChanges
   //   .debounceTime(200)
   //   .distinctUntilChanged()
   //   .switchMap((query) =>  this._searchService.search(query))
   //   .subscribe( result => { if (result.status === 400) { return; } else {   this.results = result.json().artists.items; }
   // });
   this.queryField.valueChanged.subscribe( (result)=>{});
   }
}
