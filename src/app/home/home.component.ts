import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  navigateToGetStarted() {
    // Add get started logic here
    console.log('Get Started clicked');
  }
}
