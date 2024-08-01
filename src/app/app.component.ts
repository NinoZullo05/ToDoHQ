import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './modules/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
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
