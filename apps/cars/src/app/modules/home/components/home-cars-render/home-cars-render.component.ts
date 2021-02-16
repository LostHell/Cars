import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-cars-render',
  templateUrl: './home-cars-render.component.html',
  styleUrls: ['./home-cars-render.component.scss'],
})
export class HomeCarsRenderComponent {
  @Input() item: {
    id;
    make;
    model;
    description;
    extras;
    price;
    image;
    createdOn;
    owner;
  };

  constructor() {}
}
