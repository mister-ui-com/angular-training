import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp1',
  template: `
  <h1>This is Header </h1>
  <p> {{title}} </p>
  `,
  styles: [`
  h1 { background: red; }
  p { background: green; }
  `]
})
export class TestComp1Component implements OnInit {

  public title: string = "hello world 2";
  constructor() { }

  ngOnInit(): void {
  }

}
