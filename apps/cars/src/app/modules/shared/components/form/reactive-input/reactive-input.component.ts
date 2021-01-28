import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
})
export class ReactiveInputComponent implements AfterViewInit {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'email' | 'password' | 'file' | 'number' = 'text';
  @Input() error: string;

  constructor() {}

  ngAfterViewInit(): void {
    // Obtain the control over the input.
    const control = this.form.get(this.name);

    // Then check validity and mark as touched.
    if (!!control && control.invalid && control.dirty) {
      control.markAsTouched();
    }
  }
}
