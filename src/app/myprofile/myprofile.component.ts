import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './profile.api.service';  // Replace with the correct path

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyProfileComponent implements OnInit {
  token  = localStorage.getItem('token');
  public username!: string | null;
  cart: boolean = false;

  constructor(private myProfileService: MyProfileService) {
    const user =  this.myProfileService.decodeJwt(this.token);
    this.username = user.username 
  console.log(this.username)
  }

  ngOnInit() {
    // Subscribe to name updates from the service
 
  }
}
