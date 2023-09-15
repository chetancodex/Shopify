import { Component, OnDestroy } from '@angular/core';
import { CartService } from './api.service.cart';
import { Store, select } from '@ngrx/store';
import { deleteCartItem, incrementCartItem, loadCart } from './state/action';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { AppState, selectAllCartItems } from './state/selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartProducts: any;
  cartProducts$!: Observable<Cart[]>;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadCart());
    this.cartProducts$ = this.store.pipe(select(selectAllCartItems));
    
  }
   
  onIncreament(product : any) {
    this.store.dispatch(incrementCartItem({ product }))
  }
  deleteProduct(productId: number) {
    console.log('component')
    this.store.dispatch(deleteCartItem({ productId }));
  }
}
