import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  public msg: string;

  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.msg);
  }
  

  @Output()
  messageEvent = new EventEmitter<string>();

  sendData(){
    this.messageEvent.emit("Child to parent");
  }

}
