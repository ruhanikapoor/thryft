import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router)

  signUpPage(){
    this.router.navigateByUrl("sign-up");
  }

  login() {
    this.router.navigateByUrl("home");
  }

}
