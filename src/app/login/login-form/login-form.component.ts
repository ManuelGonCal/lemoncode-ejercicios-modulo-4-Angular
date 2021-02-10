import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import {Router} from '@angular/router';
import { MemberEntity } from 'src/app/model/member-model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  member: MemberEntity;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {

    this.passwordControl = new FormControl('', [Validators.required]);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);

    this.loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

    this.member = {
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  logIn() {
    this.member = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    if (this.userService.login(this.member)) {
      this.router.navigateByUrl('/');
    } else {
      alert('user: master8@lemoncode.net || password: 12345678')
    }
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
