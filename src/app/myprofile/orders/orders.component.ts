import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { selectAllCartItems } from '../shopping-cart/state/selector';
import { AppState } from 'src/app/products/state/selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  OrderProducts$!: Observable<Cart[]>;
  grandTotal : any
  totalQuantity !: number;
constructor(private store : Store<AppState> ) {
  this.OrderProducts$ = this.store.pipe(select(selectAllCartItems))
  this.OrderProducts$.subscribe((cartItems) => {
    // Reset totals
    console.log(cartItems)
    this.grandTotal = 0;
    this.totalQuantity = 0;

    // Calculate totals
    cartItems.forEach((item) => {
      this.totalQuantity += item.quantity; // Add the quantity of each item
      this.grandTotal += item.price * item.quantity; // Add the price of each item multiplied by its quantity
    });
  });
}


}
