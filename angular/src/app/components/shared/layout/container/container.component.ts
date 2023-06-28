import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (/\/home/.test(this.router.url)) {
      this.authService.refresh();
    }
  }
}
