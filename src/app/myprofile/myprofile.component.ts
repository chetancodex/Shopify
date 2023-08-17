import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './profileapiservice';  // Replace with the correct path

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyProfileComponent implements OnInit {
  public username: string = 'Hello';
  cart: boolean = false;

  constructor(private myProfileService: MyProfileService) {
    this.myProfileService.getNameUpdates().subscribe((name) => {
      this.username = name;
    });
  }

  ngOnInit() {
    // Subscribe to name updates from the service
 
  }
}
