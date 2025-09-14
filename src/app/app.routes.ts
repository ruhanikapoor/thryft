import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Homepage } from './components/homepage/homepage';

export const routes: Routes = [
  {
    path: "",
    component: LandingPage
  },
  {
    path: "login",
    component: Login
  },
  {
    path: "sign-up",
    component: Register
  },
  {
    path: "home",
    component: Homepage
  }
];
