import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngbd-carousel-basic',
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
	templateUrl: 'carousel.component.html',
})
export class CarouselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor() { }

  ngOnInit(): void {
  }

}
