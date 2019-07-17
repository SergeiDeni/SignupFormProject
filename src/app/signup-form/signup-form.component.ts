import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  inputText1 = '';
  inputText2 = '';
  // Input = '';
  // InputPass ='';

  constructor() { }

  ngOnInit() {
  }

  save(Input, InputPass) {
    console.log(this.inputText1);
    console.log(this.inputText2);
    console.log(Input);
    console.log(InputPass);

  }

  onKeyUp1 (value){
    // console.log(event)
    this.inputText1=value;
  }

  onKeyUp2 (value){
    // console.log(event)
    this.inputText2=value;
  }
}

