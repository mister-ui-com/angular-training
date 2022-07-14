import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      'name': ['Test value', Validators.required],
      'email': [''],
      'subject': [''],
      'message': ['']
    });

    // this.contactForm.valueChanges.subscribe(cF => {
    //   console.log(cF);
    // })

    this.contactForm.get('name').valueChanges.subscribe(cF => {
      console.log(cF);
    })
  }

  onSubmit(){

    if(this.contactForm.valid) {
      console.log("Form is valid");
    } else {
      console.error("Form is NOT valid");
    }

    // let cF = this.contactForm.value as ContactForm;
    // console.log(cF);

    // console.log(cF.email);
  }

}
