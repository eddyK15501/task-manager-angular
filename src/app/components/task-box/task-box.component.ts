import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Task } from '../../tasks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-box',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-box.component.html',
  styleUrl: './task-box.component.css'
})
export class TaskBoxComponent {
  @Input() task!: Task;
  faTimes = faTimes;
}
