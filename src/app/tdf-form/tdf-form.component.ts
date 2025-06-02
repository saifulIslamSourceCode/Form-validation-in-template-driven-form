import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';

import { FormsModule, NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { User } from '../user';
import { error } from 'console';
// import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tdf-form',
  imports: [NgFor, FormsModule, CommonModule, NgIf],
  templateUrl: './tdf-form.component.html',
  styleUrl: './tdf-form.component.scss'
})
export class TdfFormComponent {
  topics: string[] = ["Angular", "React", "Vue"];
  topicHasError: boolean = false;
  submitted: boolean = false;
  errorMassage: string = '';

  userModel = new User('Rob', 'rob@test.com', 44444441114, '', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) { }

  //sectct tag error validation
  validateTopic(value: any): void {
    this.topicHasError = (value === '');
  }

  //form submitions
  onSubmit(): void {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe({
      next: data => console.log("success", data),
      error: error => this.errorMassage = error.statusText
    })
  }
}
