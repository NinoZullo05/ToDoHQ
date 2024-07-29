import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
