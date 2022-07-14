import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EmployeeService } from './services/employee.service';

interface Student {
  name: string;
  age: number;
  gender: string
  totalMarks: number; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent implements OnInit{
  // Title can be use
  public title = 'Angular Training';
  empList;

  constructor(private epS: EmployeeService) {

  }

  ngOnInit(){
    // this.epS.getEmployees().subscribe(val => {
    //   console.log(val);
    //   this.empList = val;
    //  });
 
  }
   
}
