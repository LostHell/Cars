import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  form: FormGroup;

  subtasks = [
    { name: 'No matter', completed: false },
    { name: 'Air conditioning', completed: false },
    { name: 'Climatronic', completed: false },
    { name: 'Leather interior/seats', completed: false },
    { name: 'Electric windows', completed: false },
    { name: 'Electric mirrors', completed: false },
    { name: 'Electric seats', completed: false },
    { name: 'Multifunction steering wheel', completed: false },
    { name: '4 x 4', completed: false },
    { name: 'ABS', completed: false },
    { name: 'ESP', completed: false },
    { name: 'Airbag', completed: false },
    { name: 'Alarm', completed: false },
    { name: 'Autopilot', completed: false },
    { name: 'CD Player', completed: false },
    { name: 'Navigation', completed: false },
  ];

  cars = [
    {
      make: 'Audi',
      models: [
        { model: 'A3' },
        { model: 'A3 Sportback' },
        { model: 'A4' },
        { model: 'A4 Allroad' },
        { model: 'A6' },
        { model: 'A8' },
        { model: 'Q3' },
        { model: 'Q5' },
        { model: 'Q7' },
      ],
    },
    {
      make: 'Mercedes',
      models: [
        { model: '124' },
        { model: '180' },
        { model: '190' },
        { model: 'A180' },
        { model: 'A200' },
        { model: 'A250' },
        { model: 'C200' },
        { model: 'C250' },
        { model: 'C300' },
      ],
    },
    {
      make: 'BMW',
      models: [
        { model: '316' },
        { model: '316i' },
        { model: '318' },
        { model: '320' },
        { model: '320d' },
        { model: '330' },
        { model: '330d' },
        { model: '520' },
        { model: '530' },
      ],
    },
    {
      make: 'VW',
      models: [
        { model: 'Golf' },
        { model: 'Jetta' },
        { model: 'Up' },
        { model: 'Luppo' },
        { model: 'Polo' },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      car: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  createCar() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
