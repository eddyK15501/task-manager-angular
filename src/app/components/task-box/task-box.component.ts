import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { Task } from '../../tasks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-box',
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-box.component.html',
  styleUrl: './task-box.component.css',
})
export class TaskBoxComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDblClick: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  remindTask(task: Task) {
    this.onDblClick.emit(task);
  }
}
