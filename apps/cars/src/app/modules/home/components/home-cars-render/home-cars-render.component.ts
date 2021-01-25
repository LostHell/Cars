import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cars-render',
  templateUrl: './home-cars-render.component.html',
  styleUrls: ['./home-cars-render.component.scss'],
})
export class HomeCarsRenderComponent implements OnInit {
  @Input() item: {
    name: string;
    description: string;
    price: Number;
    imageUrl: string;
    createdOn: Date;
  };

  constructor() {}

  ngOnInit(): void {}
}
