import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotpassword.component.html',
  standalone: true,
  styleUrls: ['./forgotpassword.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class ForgotPasswordComponent {
  recoveryForm: FormGroup;
  feedbackMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.recoveryForm.valid) {
      const email = this.recoveryForm.get('email')?.value;
      console.log('Password recovery initiated for:', email);
      this.feedbackMessage = 'A password reset link has been sent to your email.';
      this.recoveryForm.reset();
    } else {
      console.error('Invalid form submission.');
    }
  }
}