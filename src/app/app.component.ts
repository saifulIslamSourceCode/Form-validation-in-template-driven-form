import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TdfFormComponent } from './tdf-form/tdf-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TdfFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
