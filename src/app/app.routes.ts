import { Routes } from '@angular/router';
import { SignUpComponent } from './models/auth/sign-up/sign-up.component';
import { SignInComponent } from './models/auth/sign-in/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
];
