import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteCartItem, updateCartItem, loadCart, orderCartItem } from './state/action';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { AppState, selectAllCartItems } from './state/selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartProducts$!: Observable<Cart[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadCart());
    this.cartProducts$ = this.store.pipe(select(selectAllCartItems));
  }

  onIncrement(product: Cart) {
    const productId = product.productId;
    const quantity = product.quantity + 1;
    this.UpdateCartItem(productId, quantity);
  }

  onDecrement(product: Cart) {  
    const productId = product.productId;
    const qty = product.quantity - 1;
    this.UpdateCartItem(productId, qty);
  }

  UpdateCartItem(productId: any, quantity: any) {
    this.store.dispatch(updateCartItem({ productId, quantity }));
  }

  deleteProduct(productId: number) {
    this.store.dispatch(deleteCartItem({ productId }));
  }

  goToOrders() {
    // Subscribe to the cartProducts$ observable to get all cart items
    this.cartProducts$.subscribe((cartItems) => {
      // Extract productId and quantity from each cart item
      const cartData = cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));
      
      // Now, you have cartData containing productId and quantity of all cart items
      console.log('Cart Data:', cartData);

      // Dispatch your action with the cart data as needed
      this.store.dispatch(orderCartItem({ cartData }));
    });
  }
}
