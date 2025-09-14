import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  router = inject(Router);

  loginPage() {
    this.router.navigateByUrl("login");
  }

  signUp() {
    this.router.navigateByUrl("home");
  }

}
