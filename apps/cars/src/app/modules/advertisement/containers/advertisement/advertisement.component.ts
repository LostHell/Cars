import { Component, OnInit } from '@angular/core';
import {
  FormArray,
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      make: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      images: this.fb.array([this.fb.control('')]),
    });
  }

  get images(): FormArray {
    return this.form.get('images') as FormArray;
  }

  addImage() {
    this.images.push(this.fb.control(''));
  }

  removeQuantity(i: number) {
    if (this.images.length > 1) {
      this.images.removeAt(i);
    }
  }
}
