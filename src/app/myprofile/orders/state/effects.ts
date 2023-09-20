import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrderService } from "../order.api.service";
import * as orderActions from './action'
import { catchError, map, of, switchMap, tap } from "rxjs";
@Injectable()
 
export class OrderEffects {
    constructor( private actions$ : Actions , private orderService : OrderService) {} 
    loadOrderItems$ = createEffect(() => 
        this.actions$.pipe(
            ofType(orderActions.loadOrderItems),
            switchMap(() => 
            this.orderService.fetchOrderItems().pipe(
                tap((orderItems) => console.log("Fetched : ", orderItems)),
                map((orderItems) => orderActions.loadOrderItemsSuccess({ orderItems })),
                catchError((error) => of(orderActions.loadOrderItemsFailure({ error })))
            ))
        )
    );
}