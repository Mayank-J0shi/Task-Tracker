import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  //when ever we have a form we should have a property for each input field of the form
  // why does ! work here ~ because we are not using the form in this component, we are using the form in the parent component
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    //validation for the form
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    //create a new task object
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //emit the new task to the parent component (app.component.ts)
    this.onAddTask.emit(newTask);

    //reset the form after submitting

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
