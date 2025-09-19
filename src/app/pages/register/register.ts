import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpCredentials } from '../../../interfaces/auth.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  router = inject(Router);
  authService = inject(AuthService);

  signUpForm = new FormGroup<{
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]})
  });

  loginPage() {
    this.router.navigateByUrl("login");
  }

  signUp() {
    if(this.signUpForm.valid){
      const user: SignUpCredentials = this.signUpForm.value as SignUpCredentials;
      this.authService.login(user.email, user.password);
      const redirectUrl = sessionStorage.getItem('redirectUrl') || '/home';
      sessionStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redirectUrl);
    } else {
      alert("Invalid form. Check credentials again");
    }
  }

}
