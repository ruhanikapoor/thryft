import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from '../../../interfaces/auth.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router)

  loginForm = new FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]})
  });

  signUpPage(){
    this.router.navigateByUrl("sign-up");
  }

  login() {
    if(this.loginForm.valid){
      const user: AuthCredentials = this.loginForm.value as AuthCredentials;
      this.router.navigateByUrl("home");
    } else {
      alert("Invalid form. Check credentials again");
    }
  }

}
