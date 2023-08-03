import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  accessprofile: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Listen for navigation end events to update accessprofile
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateAccessProfileFromLocalStorage();
      }
    });

    // Initial update
    this.updateAccessProfileFromLocalStorage();
  }

  // Method to navigate to the login page
  goToLogin() {
    this.router.navigate(['login']);
  }

  // Method to navigate to the shopping cart page
  goToCart() {
    this.router.navigate(['myprofile/shopping-cart']);
  }

  private updateAccessProfileFromLocalStorage() {
    // Update accessprofile based on the current value of 'token'
    this.accessprofile = !!localStorage.getItem('token');
  }
}
