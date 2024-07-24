import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './models/auth/sign-up/sign-up.component';
import { SignInComponent } from './models/auth/sign-in/sign-in/sign-in.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignUpComponent,
    RouterLink,
    RouterLinkActive,
    SignInComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todohq';
}
