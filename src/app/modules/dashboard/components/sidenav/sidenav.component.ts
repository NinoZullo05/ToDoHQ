import { Component, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatMenuModule, MatIcon, ButtonComponent, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
    activeSection = 'dashboard'; // Seleziona "Dashboard" di default

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');

    if (
      this.isMenuOpen &&
      !mobileMenu?.contains(target) &&
      !menuToggle?.contains(target)
    ) {
      this.isMenuOpen = false;
    }
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.isMenuOpen = false; // To close the menu when the menu is opened
  }

  logout() {
    // TODO : logout logic
  }

  // TODO : fix menu size for mobile and reduce the space between logout and other buttons.
}
