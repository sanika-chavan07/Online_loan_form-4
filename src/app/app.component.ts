import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Online_Loan_Application';

  @ViewChild('loanForm')
  loanForm!: NgForm;

  onloansubmit() {

    if (this.loanForm.invalid) {
      return this.loanForm.control.markAllAsTouched();
    }

    console.log(this.loanForm.value);

    this.loanForm.reset();
  }
}