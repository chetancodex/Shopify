import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './cartapi';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to changes in cartItems$
    this.cartService.cartItems.subscribe((cartItems) => {
      this.cartProducts = cartItems;
    });
  }
}
