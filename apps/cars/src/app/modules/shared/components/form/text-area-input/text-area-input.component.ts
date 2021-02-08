import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
})
export class TextAreaInputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
