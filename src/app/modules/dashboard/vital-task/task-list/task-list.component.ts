import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../core/models/task.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true, 
  imports : [NgFor],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  @Output() selectTask = new EventEmitter<Task>();

  tasks: Task[] = [
    {
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well.',
      priority: 'Extreme',
      status: 'Not Started',
      statusColor: '#FF0000', // Rosso per "Not Started"
      createdOn: '20/06/2023',
      image: 'https://placehold.co/100x100'
    },
    {
      title: 'Take grandma to hospital',
      description: 'Go back home and take grandma to the hospital.',
      priority: 'Moderate',
      status: 'In Progress',
      statusColor: '#FFA500', // Arancione per "In Progress"
      createdOn: '20/06/2023',
      image: 'https://placehold.co/100x100'
    }
  ];

  onTaskSelect(task: Task) { 
    this.selectTask.emit(task);
  }
}
