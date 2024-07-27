import { Routes } from '@angular/router';
import { SignUpComponent } from './models/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './models/auth/components/sign-in/sign-in.component';
import { Error404Component } from './models/error/pages/error404/error404.component';
import { DashboardComponent } from './models/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '**', component: Error404Component },
];
