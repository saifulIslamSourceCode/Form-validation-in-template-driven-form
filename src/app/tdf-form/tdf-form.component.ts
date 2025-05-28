import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tdf-form',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './tdf-form.component.html',
  styleUrl: './tdf-form.component.scss'
})
export class TdfFormComponent {
  topics: string[] = ["Angular", "React", "Vue"];
}
