import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import {
  LandingPage,
  Login,
  Register,
  Homepage,
  ProductPage,
  CategoryPage,
  Error,
} from './pages/index';

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
        path: 'category/:id',
        component: CategoryPage,
      },
      {
        path: 'product/:id',
        component: ProductPage,
      },
    ],
  },
  {
    path: 'not-found',
    component: Error,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
