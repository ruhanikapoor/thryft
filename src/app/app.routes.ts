import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Homepage } from './components/homepage/homepage';
import { Layout } from './components/layout/layout';
import { ProductPage } from './components/product-page/product-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'sign-up',
    component: Register,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Homepage,
      },
      {
        path: "product",
        component: ProductPage
      }
    ],
  },
];
