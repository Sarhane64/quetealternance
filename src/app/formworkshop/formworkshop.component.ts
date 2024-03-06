import { Component } from '@angular/core';
import { Formwork } from '../model/WorkshopForm.js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formworkshop',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formworkshop.component.html',
  styleUrl: './formworkshop.component.css',
})
export class FormworkshopComponent {
  form: Formwork = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.form);
  }
}
