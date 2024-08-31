import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invite-popup',
  standalone: true,
  imports: [],
  templateUrl: './invite-popup.component.html',
  styleUrl: './invite-popup.component.css',
})
export class InvitePopupComponent {
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
