import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../model/Order.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newOrder: Order = {
    title: '',
    quantity: 0,
    date: new Date(),
    contact: '',
  };
  onSubmit(): void {
    console.log(this.newOrder);
  }
}
