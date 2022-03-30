import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

//we can take values from the use of props by using the @Input() decorator
//but idk why do we have error when we use @Input() color : stringProperty 'color' has no initializer and is not definitely assigned in the constructo
//but it is solved by @Input() color! : string;
//could be node version error

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color!: string;
  @Input() text!: string;
  //so here we are using the @Output() decorator to create an event emitter
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  //we are using the @Output() decorator to create an event emitter
  onClick(){
    this.btnClick.emit();
  }

}
