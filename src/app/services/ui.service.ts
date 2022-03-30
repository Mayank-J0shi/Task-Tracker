import { Injectable } from '@angular/core';
import { Observable,Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask : boolean =false;
  private subject : Subject<any> = new Subject<any>(); //getter and setter for the showAddTask property 

  constructor() { }

  
  toggleAddTask() : void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);  //emit the new value to the subscribers  
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable(); //return the observable to the subscribers 
  }
}
