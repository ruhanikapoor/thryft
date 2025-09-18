import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { LandingPage, Login, Register, Homepage, ProductPage, CategoryPage } from './pages/index';

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
        path: "category/:id",
        component: CategoryPage
      },
      {
        path: "product/:id",
        component: ProductPage
      }
    ],
  },
];
