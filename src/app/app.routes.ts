import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component.js';
import { HeaderComponent } from './header/header.component.js';
import { HomeComponent } from './home/home.component.js';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: HeaderComponent },
  { path: 'user', component: FooterComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
