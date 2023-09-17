import { Component, OnDestroy } from '@angular/core';
import { CartService } from './api.service.cart';
import { Store, select } from '@ngrx/store';
import {  deleteCartItem, updateCartItem, loadCart } from './state/action';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { AppState, selectAllCartItems } from './state/selector';
import { Product } from 'src/app/Interfaces/product-interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartProducts$!: Observable<Cart[]>;
  
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadCart());
    this.cartProducts$ = this.store.pipe(select(selectAllCartItems));
    this.cartProducts$.subscribe(a=> {
      console.log(a)
    })
    console.log(this.cartProducts$)
  }
  onIncrement( product : Cart) {
    console.log('on component')
    console.log(product)
   const productId = product.productId;
   const quantity = product.quantity + 1;
   this.UpdateCartItem(productId , quantity)
  }
  onDecrement(product : Cart) {
    const productId = product.productId;
    const qty = product.quantity - 1;
    this.UpdateCartItem(productId , qty)
  }
   
  UpdateCartItem(productId : any , quantity : any) {
    this.store.dispatch(updateCartItem({ productId , quantity }));
  };
  
  deleteProduct(productId: number) {
    console.log('component')
    this.store.dispatch(deleteCartItem({ productId }));
  }
}
