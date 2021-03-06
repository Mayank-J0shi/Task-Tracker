import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', // this is the default value for the content type header in the http request header
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  //what are obsevable and observables?
  //observable is a data stream that can be subscribed to and that can emit data to the subscribers
  //why is it better than return types in functions?
  //because we can subscribe to the observable and get the data that we need

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS); //of is a method that returns an observable of the given array of tasks
    // return tasks; //return the observable
    //previosuly we were just returning the tasks array, but now we are returning from the json server with help of httpclient
    return this.http.get<Task[]>(this.apiUrl); //return the observable from the http get request to the apiUrl
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); //put is a method that sends the data to the server and returns the response
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions); //post is a method that sends the data to the server and
                                                                // returns the response and the response is the task that we just added 
                                                                // to the database
  }
}
