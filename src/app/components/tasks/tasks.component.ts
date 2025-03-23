import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskBoxComponent } from '../task-box/task-box.component';
import { Task } from '../../tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskBoxComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      // console.log(data);
    });
  }

  handleDeleteTask(task: Task) {
    this.taskService.dbDeleteTask(task).subscribe((data) => {
      this.tasks = this.tasks.filter((t) => t.id !== data.id);
    });
  }

  handleRemindTask(task: Task) { 
    task.reminder = !task.reminder;
    this.taskService.dbRemindTask(task).subscribe();
  }
}
