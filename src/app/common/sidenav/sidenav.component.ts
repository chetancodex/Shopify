import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service';
import { MyProfileComponent } from 'src/app/myprofile/myprofile.component';
import { MyProfileService } from 'src/app/myprofile/profileapiservice';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  username!: string | null;
  
  constructor(private loginService: LoginService, private http: HttpClient, private profileService: MyProfileService) {
   
  }

  ngOnInit() {
    // Subscribe to name updates
    this.profileService.username$.subscribe((res)=> {
      this.username = res
    })
  }

  Logout() {
    this.loginService.onLogout();
  }
}
