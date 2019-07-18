import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  inputMail = '';
  inputPassword = '';

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.inputMail);
    console.log(this.inputPassword);
   }

}

