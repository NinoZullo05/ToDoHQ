import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { TopnavComponent } from "./components/topnav/topnav.component";
import { HeaderComponent } from "./homepage/components/header/header.component";
import { DashboardTasksComponent } from './homepage/components/dashboard-tasks/dashboard-tasks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, TopnavComponent, HeaderComponent, DashboardTasksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
