import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student;
  constructor(private epS: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       
      let id = params['studentId'];

      this.epS.getUser(id).subscribe(user => {
        this.student = user['data'];
      });


    });

  }

}
