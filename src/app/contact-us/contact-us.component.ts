import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   studentName: string;

  constructor() { }

  ngOnInit() {
    console.log("ContactUsComponent");
    this.studentName =  "John, Doe";
  }
 
  
}
