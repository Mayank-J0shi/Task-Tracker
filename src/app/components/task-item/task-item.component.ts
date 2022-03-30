import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
   @Input() task!: Task;
   //since we have here output so we need to go to the parent component
   @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
   faTimes =faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    //we do not want to do the deletion part here so we need to emit the event to the service it is responsible for all CRUD operations
    //plus we already have the service in the parent component so we can emit the event to the parent component
    this.onDeleteTask.emit(task);//emit the event
  }

  onToggle(task : Task){
    this.onToggleReminder.emit(task);
  }
}
