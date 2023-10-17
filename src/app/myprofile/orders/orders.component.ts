import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Interfaces/orders.interface';
import { AppState, selectAllOrderItems } from './state/selector';
import { Store, select } from '@ngrx/store';
import { loadOrderItems } from './state/action';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderItems$!: Observable<Order[]>;
  grandTotal = BigInt(0);
  totalQuantity = 0;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadOrderItems());
    this.orderItems$ = this.store.pipe(select(selectAllOrderItems));
    console.log(this.orderItems$);
  }
  ngOnInit() {
    this.store.dispatch(loadOrderItems());

    this.orderItems$.subscribe((res) => {
      this.resetValues();
      setTimeout(() => {
        res.forEach((item) => {
          this.grandTotal += BigInt(item.price * item.quantity);
          this.totalQuantity += item.quantity;
        });
      });
    });
  }

  private resetValues() {
    this.grandTotal = BigInt(0);
    this.totalQuantity = 0;
  }
}
