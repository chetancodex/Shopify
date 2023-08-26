import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;
  isError!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onLogin(form: NgForm) {
    
    const email = form.value.email;
    const password = form.value.password;

    // Create the data object with email and password
    const data = {
      email: email,
      password: password,
    };

    // Set isLoading to true to show a loading indicator
    this.isLoading = true;
    this.http.post<any>('http://localhost:3360/user/signIn', data).subscribe(
      (responseData) => {
        // Request successful, handle the response here
        console.log(responseData);
        localStorage.setItem('token', responseData.token);
        // Assuming the login was successful, you can navigate to another page
          this.router.navigate(['side-nav']);
      },
      (error) => {
        // Request failed, handle the error here
        console.error('Error:', error);
        this.isError = `Email id doesn't exist or password is incorrect.`;
        this.isLoading = false;
      },
      () => {
        // Request completed (regardless of success or error), reset isLoading
        this.isLoading = false;
      }
    );
  
  }
}
// http://localhost:3000/newuser/signin For mongoDB SignIN
// http://localhost:3360/user/signIn   For mysql SignIn
