import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: any = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileUrl: 'http://example.com'
  };

  // TODO : create and add user model.
}
