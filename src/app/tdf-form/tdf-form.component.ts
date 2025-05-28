import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-tdf-form',
  imports: [NgFor, FormsModule, CommonModule, NgIf],
  templateUrl: './tdf-form.component.html',
  styleUrl: './tdf-form.component.scss'
})
export class TdfFormComponent {
  topics: string[] = ["Angular", "React", "Vue"];

  userModel = new User('', 'rob@test.com', 44444444, '', 'morning', true);
}
