import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Signup } from '../model/Signup.js';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user: Signup = {
    firstName: '',
    lastName: '',
    email: '',
    passWord: '',
  };

  onSubmit() {
    console.log(this.user);
  }
}
