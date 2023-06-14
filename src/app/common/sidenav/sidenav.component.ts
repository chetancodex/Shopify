import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private loginService: LoginService){}
  Logout(){
    this.loginService.onLogout()
}
}
