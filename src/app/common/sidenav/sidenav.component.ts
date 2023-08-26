import {  Component} from '@angular/core';
import { MyProfileService } from 'src/app/myprofile/profileapiservice';
import { Router } from '@angular/router';
import { CartService } from 'src/app/myprofile/shopping-cart/api.service.cart';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
  username!: string | null;
  
  constructor( private profileService: MyProfileService, private router : Router , private cartapi :CartService) {
    const user = this.profileService.decodeJwt(localStorage.getItem('token'));
    this.username = user.username
    console.log(this.username);
  }

 
  
  onLogout() {
    this.router.navigate(['login']);
    localStorage.clear();
    console.log('Local storage cleared');
    this.cartapi.username = null
  }
 
  

}
