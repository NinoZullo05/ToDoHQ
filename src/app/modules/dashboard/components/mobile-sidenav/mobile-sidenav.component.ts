import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { LogoutButtonComponent } from "../logout-button/logout-button.component";
@Component({
  selector: 'app-mobile-sidenav',
  standalone: true,
  imports: [NgClass, UserProfileComponent, LogoutButtonComponent],
  templateUrl: './mobile-sidenav.component.html',
  styleUrl: './mobile-sidenav.component.css',
})
export class MobileSidenavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeSection = 'dashboard';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
