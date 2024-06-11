import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  //submit function. want Login to be ngForm
  submit(login: any) {
    console.log("Form Submitted", login)
  }

}
