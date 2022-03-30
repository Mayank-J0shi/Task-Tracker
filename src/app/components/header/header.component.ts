import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription; //inject the service in the constructor of the component

  //inorder to use a service we need to inject/add it in the constructor of the component
  constructor(private uiService: UiService,private router:Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask(); //call the toggleAddTask method of the service
  }

  hasRoute(route: string) {
    return this.router.url===route;//returns true if the current route is equal to the route parameter
  }
}
