import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  authForm: FormGroup;

  constructor (
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'email': [' ', Validators.required ],
      'password': [' ', Validators.required ]
    });
  }

  submitForm() {
    let credentials = this.authForm.value;
    console.log(credentials);
  }
 
}

