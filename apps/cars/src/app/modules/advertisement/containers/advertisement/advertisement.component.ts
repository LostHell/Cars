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
