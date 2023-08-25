import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './api.service.cart';
import {Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCart, loadCartSuccess } from './state/action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts:any;
  cartProducts$ !: Observable<Product[]>

  constructor(private http: HttpClient, private cartService: CartService , router : Router , private store : Store<{cart : Product[] }>) {
    // this.cartService.cartItems$.subscribe((cartItems) => {
    //   this.cartProducts = cartItems;
    // });
    this.cartProducts$ =  this.store.select('cart')
  }

  ngOnInit() {

    this.store.dispatch(loadCart());
    this.cartProducts$.subscribe((res)=> {
      this.cartProducts = res
    })
    console.log(this.cartProducts);
    console.log(this.cartProducts$)
  }




  deleteProduct(product :Product) {
   const data = {
    username : this.cartService.username,
    productId : product.id
   }
   this.http.post('http://localhost:3360/cart/delete',data).subscribe((res) => {
    console.log({message : "Product deleted Success"});
    this.cartService.refreshCartItems()
   })
  };
  
}
