import { Component, Input } from '@angular/core';
import { Task } from '../../../../core/models/task.model';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {
  @Input() task: Task | null = null;
}
