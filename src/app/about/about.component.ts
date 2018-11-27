import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
      //url demo check
      console.log(this.apiService.aboutUrl);
      console.log(this.apiService.apiResponseStatus());
  }

}
