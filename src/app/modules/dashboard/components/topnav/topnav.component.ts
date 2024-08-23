import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [MatIconModule, ButtonComponent, MatMenuModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css',
})
export class TopnavComponent {
  onEventsClick() {
    throw new Error('Method not implemented.');
  }
  onNotificationsClick() {
    throw new Error('Method not implemented.');
  }
  onSearchClick() {
    throw new Error('Method not implemented.');
  }
  daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  dateInfo: Date = new Date();
  date: any = {
    day: this.daysOfWeek[this.dateInfo.getDay()],
    dayNumber: this.dateInfo.getDate(),
    month: this.dateInfo.getMonth() + 1,
    year: this.dateInfo.getFullYear().toString().slice(-2),
    hour: this.dateInfo.getHours(),
    minute: this.dateInfo.getMinutes(),
    second: this.dateInfo.getSeconds(),
    amPm: this.dateInfo.getHours() >= 12 ? 'PM' : 'AM',
  };

  formattedDate: string = `${this.date.dayNumber}/${this.padNumber(
    this.date.month
  )}/${this.date.year}`;

  padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
  //TODO : FIX UI and add  app-button instead of button
}
