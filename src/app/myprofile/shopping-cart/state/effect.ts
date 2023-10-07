import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from '../cart.api.service';
import * as cartActions from './action';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  loadCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadCart),
      switchMap(() =>
        this.cartService.fetchCartItems().pipe(
          tap((cartItems) => console.log('Fetched cartItems', cartItems)),
          map((cartItems) => cartActions.loadCartSuccess({ cartItems })),
          catchError((error) => of(cartActions.loadCartFailure({ error })))
        )
      )
    )
  );
  updateCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.updateCartItem),
      switchMap((action) =>
        this.cartService.updateCartItem(action.productId, action.quantity).pipe(
          tap(() => console.log('on updated Effects Item')),
          map(() => cartActions.loadCart()),
          catchError(
            (error) => of(cartActions.updateCartItemFailure({ error })) // Handle error with an action
          )
        )
      )
    )
  );

  deleteCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.deleteCartItem),
      switchMap((action) =>
        this.cartService.deleteProduct(action.productId).pipe(
          tap(() => console.log('Successfully deleted cart item')),
          map(() => cartActions.loadCart()),
          catchError((error) =>
            of(cartActions.deleteCartItemFailure({ error }))
          )
        )
      )
    )
  );
  setOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.orderCartItem),
      switchMap(() =>
        this.cartService.setOrder().pipe(
          tap(() => console.log('Set Orders')),
          map(() => cartActions.loadCart()),
          catchError((error) => of(cartActions.orderCartItemFailure({ error })))
        )
      )
    )
  );
}
