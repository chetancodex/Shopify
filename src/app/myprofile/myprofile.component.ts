import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './profileapiservice';  // Replace with the correct path

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyProfileComponent implements OnInit {
  public username!: string | null;
  cart: boolean = false;

  constructor(private myProfileService: MyProfileService) {
  this.myProfileService.fetchAndUpdateUsername()
      this.myProfileService.username$.subscribe((res)=> {
    this.username = res
  }) 
  }

  ngOnInit() {
    // Subscribe to name updates from the service
 
  }
}
