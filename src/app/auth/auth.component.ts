import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;



  constructor(
      private router: Router,
      private authService: AuthService,
      private route: ActivatedRoute,
      private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
  }


  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL ( it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }

    });
  }

  submitForm(form: NgForm) {
      if (this.authType !== 'register') {
          this.authService.signin(form.value.email, form.value.password)
              .subscribe(
                  tokenData => console.log(tokenData),
                  error => console.log(error))
      } else {
          this.authService.signup(form.value.username, form.value.email, form.value.password)
              .subscribe(
                  response => console.log(response),
                  error => console.log(error));
      }
  };
}
