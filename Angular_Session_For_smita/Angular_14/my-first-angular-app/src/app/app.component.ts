import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: String =  'my-first-angular-app';
  userName: String =  'Varun Kumar K M';
  productId: number = 1001;
  productName: String = "Laptops";
  price:number = 1000;
  quantity:number = 1;
  message = 'angular session';
}
