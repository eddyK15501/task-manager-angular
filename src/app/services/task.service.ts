import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task, TASKS } from '../tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:4300/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    let data = this.http.get<Task[]>(this.apiUrl);
    
    return data;
  }
}
