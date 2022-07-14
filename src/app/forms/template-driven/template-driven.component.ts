import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  public courseName = 'Angular';
  public courseDesc = 'Front end framework';

  // @ViewChild('courseForm') cF: NgForm;

  // test(){
  //   console.log(this.cF.value);
  //   console.log(this.cF.value.courseName);
  //   console.log(this.cF.value.courseDesc);
  // }

  // clear(){
  //   this.cF.reset();
  // }

  ngOnInit() {
  }

}
