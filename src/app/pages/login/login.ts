import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from '../../../interfaces/auth.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router = inject(Router);
  authService = inject(AuthService);

  errorMessage = '';

  loginForm = new FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  });

  signUpPage() {
    this.router.navigateByUrl('sign-up');
  }

  async login() {
    this.errorMessage = '';

    if (this.loginForm.valid) {
      const user: AuthCredentials = this.loginForm.value as AuthCredentials;

      const success = await this.authService.login(user.email, user.password);

      if (success) {
        const redirectUrl = sessionStorage.getItem('redirectUrl') || '/home';
        sessionStorage.removeItem('redirectUrl');
        this.router.navigateByUrl(redirectUrl);
      } else {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly before logging in.';
    }
  }
}
