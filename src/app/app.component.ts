import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'; // Import FormsModule for forms
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],  // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'Basic Form'; // Title for the form
  userData: { user?: string; email?: string; password?: string } = {}; // Structured object for form data

  // Handle form submission and store form data in userData object
  getData(form: NgForm) {
    if (form.valid) { // Check if the form is valid before processing
      this.userData = form.value; // Assign form values to userData object
      console.log('Form Data:', this.userData); // Log the form data
    } else {
      console.error('Form is invalid!'); // Log error if form is invalid
    }
  }
}
