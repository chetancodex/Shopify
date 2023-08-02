import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';
import { UserApiService } from 'src/app/myprofile/api.service.user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  username!: string;
  
  constructor(private loginService: LoginService, private http: HttpClient, private user: UserApiService) {
  }

  ngOnInit() {
    // Subscribe to name updates
    this.user.getNameUpdates().subscribe(name => {
      this.username = name;
      console.log(this.username);
    });
  }

  Logout() {
    this.loginService.onLogout();
  }
}
