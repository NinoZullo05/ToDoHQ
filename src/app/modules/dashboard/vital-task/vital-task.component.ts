import { Component } from '@angular/core';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-vital-task',
  standalone: true,
  imports: [TaskDetailComponent, TaskListComponent],  
  templateUrl: './vital-task.component.html',
  styleUrls: ['./vital-task.component.css'],
})
export class VitalTaskComponent {
  selectedTask: Task | null = null;

  onTaskSelected(task: Task) {
    this.selectedTask = task;
  }
}
