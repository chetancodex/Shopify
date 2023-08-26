import { HttpClient } from "@angular/common/http";
import { MyProfileService } from "../profileapiservice";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, filter } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CartService  {
  token = localStorage.getItem('token');
  username: string | null = null; // Initialize username as null

  constructor(
    private http: HttpClient,
    private profile: MyProfileService,
  ) {
    // Subscribe to route changes
 
    
  }

   fetchCartItems(): Observable<any[]> {
    if(this.token) {
      const user = this.profile.decodeJwt(this.token);
      console.log(user);
      this.username = user.username;
     }
    
    return this.http.post<any[]>('http://localhost:3360/cart/getcart', {
      username: this.username,
    });
  }

  refreshCartItems() {
    this.fetchCartItems();
  }

 
}
