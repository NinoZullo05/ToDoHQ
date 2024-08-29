import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { DashboardComponent } from "../dashboard.component";
import { DashboardTasksComponent } from "./components/dashboard-tasks/dashboard-tasks.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, DashboardTasksComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
