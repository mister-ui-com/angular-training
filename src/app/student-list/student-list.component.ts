import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


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
