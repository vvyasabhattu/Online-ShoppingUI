import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers:[NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class SingleProductComponent implements OnInit {
//images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ["./assets/img/laptop1.jpg","./assets/img/laptop2.jpg","./assets/img/laptop3.jpg"];
  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
     config.interval = 3000;
     config.wrap = false;
     config.keyboard = false;
     config.pauseOnHover = false;
      config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

}
