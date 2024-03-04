import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component.js';
import { HeaderComponent } from './header/header.component.js';
import { HomeComponent } from './home/home.component.js';
import { UserProfileComponent } from './user-profile/user-profile.component.js';
import { SignUpComponent } from './sign-up/sign-up.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RouterLink,
    UserProfileComponent,
    SignUpComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularQuete0403';
}
