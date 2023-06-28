import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

  form = this.fb.group({
    name: [''],
    email: [''],
    created_at: ['']
  });

  constructor(authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form.setValue({
      name: 'name',
      email: 'email@gmail.com',
      created_at: '123123'
    });
  }




}
