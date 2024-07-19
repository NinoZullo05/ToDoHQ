import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './models/auth/sign-up/sign-up.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todohq';
}
