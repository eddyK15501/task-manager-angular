import { Component, Input } from '@angular/core';
import { Task } from '../../tasks';

@Component({
  selector: 'app-task-box',
  imports: [],
  templateUrl: './task-box.component.html',
  styleUrl: './task-box.component.css'
})
export class TaskBoxComponent {
  @Input() task!: Task;
}
