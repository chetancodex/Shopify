import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Interfaces/orders.interface';
import { AppState, selectAllOrderItems } from './state/selector';
import { Store, select } from '@ngrx/store';
import { loadOrderItems } from './state/action';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
orderItems$ !: Observable<Order[]>;
constructor(private store: Store<AppState>) {
 this.store.dispatch(loadOrderItems());
 this.orderItems$ = this.store.pipe(select(selectAllOrderItems));
}


}
