import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from '../profileapiservice';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Product } from 'src/app/Interfaces/product-interface';
import { loadCartSuccess } from './state/action';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public username !: string | null
  constructor(
    private http: HttpClient,
    private profile: MyProfileService,
    private store: Store<{ cart: Product[] }>
  ) {
    this.profile.username$.subscribe((res)=> {
      this.username = res
    })
      this.fetchCartItems();
  }

  fetchCartItems(): Observable<any []> {
       return  this.http
        .post<any[]>('http://localhost:3360/cart/getcart', {
          username: this.username,
        })
    
  }
  refreshCartItems() {
    this.fetchCartItems();
  }
}
