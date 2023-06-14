import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../services/login-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading : boolean = false;
   isError !: string;
  @ViewChild('f') loginForm!:NgForm
  
constructor(private loginService: LoginService,
            private router : Router){}

onLogin(form:NgForm){
  // console.log("its working"); 
  this.isLoading = true
  if(this.loginForm.valid) {
    const email = form.value.email
    const password = form.value.password
    this.loginService.signIn(email,password).subscribe(resData =>{
      console.log(resData)
      if(resData.email === email){
        this.router.navigate(['myprofile'])
      }
      this.isLoading = false
      // console.log(this.isLoading)
    }, Reserror =>{
      console.log(Reserror)
      switch(Reserror.error.error.message){
        case "EMAIL_NOT_FOUND":
          this.isError  = "Your Email is Not Found In Firebase Database";
          break;
        case "INVALID_PASSWORD":
          this.isError  = "Your password is incorrect";
          break;
          default : "An Unknown Error Occured"
      }
      this.isLoading = false
    })
    this.loginService.getLoginSubject().next(true)
  }else {
    return;
  }
}






}
