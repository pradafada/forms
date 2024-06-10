import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  //submit function
  submit() {
    console.log("Form Submitted")
  }

}
