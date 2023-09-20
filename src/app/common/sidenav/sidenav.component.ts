import {  Component} from '@angular/core';
import { MyProfileService } from 'src/app/myprofile/profileapiservice';
import { Router } from '@angular/router';
import { JwtInterceptor } from 'src/app/services/auth-intercepter';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
  username!: string | null;
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
  
  constructor( private profileService: MyProfileService, private router : Router) {
    const user = this.profileService.decodeJwt(localStorage.getItem('token'));
    this.username = user.username
  }

 
  
  onLogout() {
    this.router.navigate(['login']);
    localStorage.clear();
    console.log('Local storage cleared');
  }
 
  

}
