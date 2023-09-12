import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private http: HttpClient, private router: Router) {}
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const userName = form.value.userName;
    const email = form.value.email;
    const password = form.value.password;

    const data = {
      username: userName,
      email: email,
      password: password,
    };

    this.http.post<any>('http://localhost:3360/user/register', data).subscribe(
      (responseData) => {
        console.log(responseData);
        this.router.navigate(['login']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
// http://localhost:3000/newuser/register' For MongoDB register;
// http://localhost:3360/user/register' For MySQL
