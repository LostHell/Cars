import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submitLoginData() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.dialog.closeAll();
    }
  }
}
