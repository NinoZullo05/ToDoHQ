import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Task, TaskStatus, CompletedTask } from '../../../../../core/models/task.model'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-tasks',
  standalone: true,
  imports: [NgFor, NgClass, MatIconModule],
  templateUrl: './dashboard-tasks.component.html',
  styleUrls: ['./dashboard-tasks.component.css'], 
})
export class DashboardTasksComponent {
  tasks: Task[] = [
    {
      title: "Attend Nischal's Birthday Party",
      description:
        'Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)',
      priority: 'Moderate',
      status: 'Not Started',
      statusColor: 'text-red-500',
      createdOn: '20/06/2023',
      image: '../../../../../assets/images/task1.png',
    },
    {
      title: 'Landing Page Design for TravelDays',
      description:
        'Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)',
      priority: 'Moderate',
      status: 'In Progress',
      statusColor: 'text-blueindicator',
      createdOn: '20/06/2023',
      image: '../../../../../assets/images/task2.png',
    },
    {
      title: 'Presentation on Final Product',
      description:
        'Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...',
      priority: 'Moderate',
      status: 'In Progress',
      statusColor: 'text-blue-500',
      createdOn: '19/06/2023',
      image: '../../../../../assets/images/task3.png',
    },
  ];

  taskStatus: TaskStatus[] = [
    { status: 'Completed', percentage: 84, color: '#4CAF50' }, // Use HEX color codes for SVG
    { status: 'In Progress', percentage: 46, color: '#2196F3' },
    { status: 'Not Started', percentage: 13, color: '#F44336' },
  ];

  completedTasks: CompletedTask[] = [
    {
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well.',
      completedOn: '2 days ago',
      image: '../../../../../assets/images/task1.png',
    },
    {
      title: 'Conduct meeting',
      description: 'Meet with the client and finalize requirements.',
      completedOn: '2 days ago',
      image: '../../../../../assets/images/task2.png',
    },
  ];

  getStrokeDashArray(percentage: number): string {
    const circumference = 2 * Math.PI * 35; 
    const dashArray = `${(percentage / 100) * circumference} ${circumference}`;
    return dashArray;
  }
}
