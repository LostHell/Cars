import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  form: FormGroup;

  subtasks = [
    'Air conditioning',
    'Climatronic',
    'Leather interior/seats',
    'Electric windows',
    'Electric mirrors',
    'Electric seats',
    'Multifunction steering wheel',
    '4 x 4',
    'ABS',
    'ESP',
    'Airbag',
    'Alarm',
    'Autopilot',
    'CD Player',
    'Navigation',
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

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      car: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      subtask: new FormArray([]),
      images: new FormArray([]),
    });
  }

  createCar() {
    if (this.form.valid) {
      // console.log(this.form.value.car);
      console.log(this.form.value);
    }
  }

  setTask(task) {
    if (!this.form.value.subtask.includes(task)) {
      this.form.value.subtask.push(task);
    } else {
      this.form.value.subtask.forEach((el) => {
        if (task === el) {
          const index = this.form.value.subtask.indexOf(task);
          this.form.value.subtask.splice(index, 1);
        }
      });
    }
  }

  addImages(event) {
    this.form.value.images.push(event);
  }
}
