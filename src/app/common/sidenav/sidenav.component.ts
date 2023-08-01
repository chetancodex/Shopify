import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';

interface profile {
  firstName : string,
  lastName : string,
  email : string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  name !: string
  token: string | null = localStorage.getItem('token');
 
  
  constructor(private loginService: LoginService , private http : HttpClient){
    console.log(this.token);
   let response =  this.http.post<profile>('http://localhost:3000/newuser/myprofile', {token : this.token}).subscribe((res)=>{
      // this.name = res.firstName
      console.log(res);
      this.name = res.firstName
    })
  }


  ngOnInit() {
  }
 
  Logout(){
    this.loginService.onLogout()
}
}


