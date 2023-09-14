import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './api.service.cart';
import { Store } from '@ngrx/store';
import { deleteCartItem, loadCart } from './state/action';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnDestroy {
  cartProducts: any;
  cartProducts$!: Observable<Cart[]>;
  cartSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private store: Store<{ cart: Cart[] }>
  ) {
    this.cartService.fetchCartItems();
    this.store.dispatch(loadCart());
    this.cartProducts$ = this.store.select('cart');
    this.cartSubscription = this.cartProducts$.subscribe((res) => {
      this.cartProducts = res;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
  deleteProduct(productId: Product) {
    console.log(productId);
    this.store.dispatch(deleteCartItem({ productId }));
  }
}
