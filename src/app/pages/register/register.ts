import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpCredentials } from '../../../interfaces/auth.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  router = inject(Router);

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
      this.router.navigateByUrl("home");
    } else {
      alert("Invalid form. Check credentials again");
    }
  }

}
