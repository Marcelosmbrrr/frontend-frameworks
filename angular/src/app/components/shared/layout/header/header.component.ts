import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  async signOut() {
    await this.authService.signOut();
    this.router.navigate(['/signin']);
  }

  toggleTheme() {
    const theme = localStorage.getItem("app-theme");
    let new_value = theme === 'light' ? "dark" : "light";
    if (theme === "dark") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    localStorage.removeItem("app-theme");
    localStorage.setItem("app-theme", new_value);
  }

}
