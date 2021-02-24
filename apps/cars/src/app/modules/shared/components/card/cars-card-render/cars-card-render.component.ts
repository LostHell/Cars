import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-card-render',
  templateUrl: './cars-card-render.component.html',
  styleUrls: ['./cars-card-render.component.scss'],
})
export class CarsCardRenderComponent {
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
