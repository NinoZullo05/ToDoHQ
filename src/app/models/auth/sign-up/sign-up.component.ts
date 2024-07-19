import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class SignUpComponent implements OnInit {
  imageURL = '../../../../assets/images/SignUp.webp';
  ContactForm!: FormGroup;
  isDisabled: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ContactForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
        dob: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.ContactForm.statusChanges.subscribe((status) => {
      this.isDisabled = status !== 'VALID';
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.ContactForm.valid) {
      console.log('Form Submitted', this.ContactForm.value);
    } else {
      console.log('Form not valid', this.ContactForm.value);
    }
  }
}
