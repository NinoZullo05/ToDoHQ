import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
  createdOn: string;
}
@Component({
  selector: 'app-dashboard-tasks',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-tasks.component.html',
  styleUrl: './dashboard-tasks.component.css'
})
export class DashboardTasksComponent {

  today: string = new Date().toLocaleDateString();
  tasks: Task[] = [
    {
      title: "Attend Nischal's Birthday Party",
      description: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)",
      priority: "High",
      status: "Not Started",
      createdOn: "20/06/2023",
    },
    {
      title: "Landing Page Design for TravelDays",
      description: "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
      priority: "Moderate",
      status: "In Progress",
      createdOn: "20/06/2023",
    },
    {
      title: "Presentation on Final Product",
      description: "Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...",
      priority: "Moderate",
      status: "In Progress",
      createdOn: "19/06/2023",
    },
  ];

  completedTasks: Task[] = [
    {
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      priority: "Low",
      status: "Completed",
      createdOn: "18/06/2023",
    },
    {
      title: "Conduct meeting",
      description: "Meet with the client and finalize requirements.",
      priority: "High",
      status: "Completed",
      createdOn: "18/06/2023",
    },
  ];

  getTaskStatus() {
    const totalTasks = this.tasks.length + this.completedTasks.length;
    const completed = this.completedTasks.length;
    const inProgress = this.tasks.filter(task => task.status === 'In Progress').length;
    const notStarted = this.tasks.filter(task => task.status === 'Not Started').length;

    return {
      completed: ((completed / totalTasks) * 100).toFixed(2),
      inProgress: ((inProgress / totalTasks) * 100).toFixed(2),
      notStarted: ((notStarted / totalTasks) * 100).toFixed(2),
    };
  }
}
