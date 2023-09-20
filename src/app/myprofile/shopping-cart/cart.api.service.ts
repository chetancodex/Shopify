import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyProfileService } from '../profile.api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token = localStorage.getItem('token');

  constructor(private http: HttpClient, private profile: MyProfileService) {}

  fetchCartItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3360/cart/getcart');
  }

  updateCartItem(productId: number, qty: number) {
    console.log('on update api');
    const data = {
      productId: productId,
      quantity: qty,
    };
    return this.http.patch<any>('http://localhost:3360/cart/create', data);
  }

  deleteProduct(productId: number) {
    console.log('api');
    const data = {
      productId: productId,
    };
    return this.http.post<any>('http://localhost:3360/cart/delete', data);
  }
}
