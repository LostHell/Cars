import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() images: [] = [];
  index = 0;
  item;

  constructor() {}

  ngOnInit() {
    this.item = this.images[this.index];
  }

  previousImage() {
    if (this.index > 0) {
      this.index--;
      this.item = this.images[this.index];
    }
  }

  nextImage() {
    if (this.index < this.images.length - 1) {
      this.index++;
      this.item = this.images[this.index];
    }
  }
}
