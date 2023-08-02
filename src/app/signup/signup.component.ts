import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http : HttpClient , private router : Router) {

  }
  onSignUp(form: NgForm) {
    const userName = form.value.userName;
    const email = form.value.email;
    const password = form.value.password;
    
    // Create the data object with email and password
    const data = {
      username: userName,
      email: email,
      password: password,
    };

    // Set isLoading to true to show a loading indicator
    this.http.post<any>('http://localhost:3000/newuser/register', data)
    .subscribe(
      (responseData) => {
        // Request successful, handle the response here
        console.log(responseData);

        // Assuming the login was successful, you can navigate to another page
        this.router.navigate(["myprofile"]);
        
      },
      (error) => {
        // Request failed, handle the error here
        console.error('Error:', error);
        
      },
      () => {
        // Request completed (regardless of success or error), reset isLoading
      }
    );
  }
}
