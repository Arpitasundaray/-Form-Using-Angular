import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule for forms
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],  // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'Basic form';
  userData:any={};

  // Handle form submission
  getData(data: NgForm) {
    console.warn(data);
    this.userData=data;
  }
}
