import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './cartapi';
interface Cart {
  userId : string ,
  products  : Product[]
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartProducts: Product[] = []; // Initialize an empty array
  
  constructor(private http: HttpClient , private cartService : CartService) {
   this.cartProducts = this.cartService.getCartItems()
  }
}
