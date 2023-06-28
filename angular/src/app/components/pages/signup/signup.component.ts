import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  form = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    password_confirmation: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
  });

  loading: boolean = false;

  constructor(authService: SignupService, private fb: FormBuilder, private router: Router) { }

  handleSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.router.navigate(['/signin']);
  }

}
