import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { TopnavComponent } from "./components/topnav/topnav.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, TopnavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
