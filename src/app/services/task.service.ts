import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task, TASKS } from '../tasks';
import { Observable, of } from 'rxjs';

const httpHeading = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:4300/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const data = this.http.get<Task[]>(this.apiUrl);
    return data;
  }

  dbDeleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  dbRemindTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    const response = this.http.put<Task>(url, task, httpHeading);
    
    return response;
  }
}
