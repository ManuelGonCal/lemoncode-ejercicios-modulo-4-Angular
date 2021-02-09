import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.passwordControl = new FormControl('', [Validators.required]);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);

    this.loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value'
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  // TODO
  // createEditForm() {
  //   this.editForm = this.fb.group({
  //     email: ['', Validators.required, Validators.email],
  //     password: ['', Validators.required]
  //   });

  //   this.emailControl = this.editForm.get('email') as FormControl;
  //   this.passwordControl = this.editForm.get('password') as FormControl;
  // }
}
