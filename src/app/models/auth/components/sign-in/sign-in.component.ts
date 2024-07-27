import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterOutlet,
  RouterLink,
  Router,
} from '@angular/router';
import { GoogleButtonComponent } from '../../../../shared/components/google-button/google-button.component';
import { FacebookButtonComponent } from '../../../../shared/components/facebook-button/facebook-button.component';
import { XButtonComponent } from '../../../../shared/components/x-button/x-button.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GoogleButtonComponent,
    FacebookButtonComponent,
    XButtonComponent,
    ButtonComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private readonly router: Router) {}

  onButtonClick() {
    this.router.navigate(['/dashboard']);
    // TODO : Implementare logica per loggare con firebase
    throw new Error('Method not implemented.');
  }
  imageURL: string = '../../../../../assets/images/signIn.png';
}
