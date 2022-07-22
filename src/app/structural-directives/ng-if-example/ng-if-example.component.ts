import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  isLoggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = false;
  }

  changeFlag(){
    this.isLoggedIn = !this.isLoggedIn;
  }

}
