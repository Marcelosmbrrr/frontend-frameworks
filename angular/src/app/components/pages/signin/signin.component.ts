import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  loading: boolean = false;

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  async handleSubmit(): Promise<void> {
    try {
      await this.authService.signIn(this.form);
      this.router.navigate(['/home']);
    } catch (e) {
      console.log(e);
    }
  }

}
