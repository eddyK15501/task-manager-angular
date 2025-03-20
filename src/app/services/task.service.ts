import { Injectable } from '@angular/core';
import { Task, TASKS } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
