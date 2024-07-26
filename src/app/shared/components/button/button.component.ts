import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonText: string = 'Submit';
  @Input() isDisabled: boolean = false;
  @Input() buttonClass: string =
    'bg-secondary hover:bg-pink-700 text-primary font-bold py-2 px-4 rounded disabled:bg-secondaryDisabled';

  @Output() buttonClick = new EventEmitter<void>();
  handleClick() {
    this.buttonClick.emit();
  }
}
