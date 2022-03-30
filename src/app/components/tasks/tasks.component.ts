import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //means that the tasks are available to the view
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks(); //get the tasks from the service  and assign them to the tasks variable
    //previously we were just assiging the tasks to the tasks variable, but now we are subscribing to the observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); //subscribe to the observable and assign the tasks to the tasks variable
    // ^ here we get the return value of the observable and assign it to the tasks variable
  }

  deleteTask(task: Task) {
    //currently we have not created the deleteTask method in the service we noeed to do that first
    //this.tasks = this.tasks.filter(t => t.id !== task.id); //filter the tasks array and remove the task that we want to delete
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      ); //subscribe to the observable and remove the task from the tasks array
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder; //toggle the reminder
    this.taskService.updateTaskReminder(task).subscribe(); //subscribe to the observable and update the task reminder
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks = [...this.tasks, task])); //subscribe to the observable and add the task to the tasks array
  }
    
}
