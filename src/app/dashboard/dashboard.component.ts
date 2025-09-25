import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showAlert = true;

  closeAlert() {
    this.showAlert = false;
  }

  onComposeClick() {
    // Handle compose action
    console.log('Compose clicked');
  }

  onEmailClick(emailId: number) {
    // Handle email selection
    console.log('Email clicked:', emailId);
  }
}
