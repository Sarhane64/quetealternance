import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { UserProfileComponent } from './user-profile/user-profile.component.js';
import { SignUpComponent } from './sign-up/sign-up.component.js';
import { FormComponent } from './form/form.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    RouterLink,
    UserProfileComponent,
    SignUpComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularQuete0403';
}
