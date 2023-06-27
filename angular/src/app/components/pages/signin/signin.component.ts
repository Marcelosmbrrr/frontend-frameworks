import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('OnInit');
  }

  handleSubmit(): void {
    console.log('submit');
    this.router.navigate(['/home']);
  }

}
