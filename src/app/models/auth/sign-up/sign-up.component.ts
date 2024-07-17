import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  imageURL = '../../../../assets/images/SignUp.webp';

  isDisabled: boolean = true;

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.isDisabled = false;
      console.log('Form Submitted', this.signupForm.value);
    } else {
      this.isDisabled = true;
      console.log('Form not valid');
    }
  }
}
