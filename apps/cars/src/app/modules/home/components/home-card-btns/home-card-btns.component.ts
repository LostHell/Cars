import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card-btns',
  templateUrl: './home-card-btns.component.html',
  styleUrls: ['./home-card-btns.component.scss'],
})
export class HomeCardBtnsComponent {
  @Input() itemId: string;

  constructor() {}
}
