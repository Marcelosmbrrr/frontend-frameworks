import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

interface IForm {
  email: string,
  password: string
}

interface IUser {
  id: number,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?: IUser

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getUser(): IUser | undefined {
    return this.user;
  }

  async signIn(form: FormGroup) {
    try {

      if (!form.valid) {
        throw new Error("Invalid data.")
      }

      const formData: IForm = {
        email: form.get("email")?.value,
        password: form.get("password")?.value,
      }

      //const response = await this.http.post<any>('https://dummyjson.com/auth/login', formData).toPromise();
      //console.log(response)
      // localStorage.setItem("app-auth", JSON.stringify(response.data.user)); 
      // set bearer authorization header

      localStorage.setItem("app-auth", JSON.stringify({ id: 1, name: 'Tester', email: formData.email }));
      this.user = { id: 1, name: 'Tester', email: formData.email };

    } catch (e) {
      throw e;
    }
  }

  async refresh() {
    try {
      const token = localStorage.getItem("app-auth");

      if (!token) {
        throw new Error("Token is missing.");
      }

      this.user = JSON.parse(token);
    } catch (e) {
      console.log(e)
      this.router.navigate(['/signin']);
    }
  }

  async signOut() {
    try {
      // Api fetch
      // const response = await this.http.delete('api_url/' + this.user.id)
      localStorage.removeItem("app-auth");
    } catch (e) {
      console.log(e)
    }
  }
}
