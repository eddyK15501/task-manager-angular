import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TASKS, Task } from '../../tasks';
import { TaskBoxComponent } from '../task-box/task-box.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskBoxComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
