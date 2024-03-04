import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { SignUpComponent } from './sign-up/sign-up.component.js';
import { UserProfileComponent } from './user-profile/user-profile.component.js';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'footer', component: UserProfileComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
