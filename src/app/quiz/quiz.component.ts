import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // public testValue = "Test variable";
  userList;
  constructor(private epS: EmployeeService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.epS.getUsersList().subscribe(usrList => {
      this.userList = usrList['data'];
    })
  }

}
