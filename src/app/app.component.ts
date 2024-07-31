import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DynamicForms';

  showForm = false;

  constructor(private fb : FormBuilder){}


  form : FormGroup = this.fb.group({
    name: [''],
    email: [''],
    city : ['']
  }) ;
}
