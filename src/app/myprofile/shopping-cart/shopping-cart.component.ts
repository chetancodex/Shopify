import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './cartapi';
import {Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService , router : Router) {
    this.cartService.cartItems.subscribe((cartItems) => {
      this.cartProducts = cartItems;
    });
  }

  ngOnInit() {
    // Subscribe to changes in cartItems$
 
  }
  deleteProduct(product :Product) {
   const data = {
    username : this.cartService.username,
    productId : product.id
   }
   console.log(this.cartService.username)
   this.http.post('http://localhost:3360/cart/delete',data).subscribe((res) => {
    console.log({message : "Product deleted Success"});
    this.cartService.refreshCartItems()
   })
  };
  
}
