import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from '../api.service.cart';
import * as cartActions from './action';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  loadCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadCart),
      switchMap(() =>
        this.cartService.fetchCartItems().pipe(
          tap((cartItems) => console.log('fetched', cartItems)),
          map((cartItems) => cartActions.loadCartSuccess({ cartItems })),
          catchError((error) => of(cartActions.loadCartFailure({ error })))
        )
      )
    )
  );
  increamentCartItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(cartActions.incrementCartItem),
    switchMap((action) =>
      this.cartService.incrementCartItem(action.product).pipe(
        tap(() => console.log('on Increment cart Item')),
        map(() => cartActions.loadCart()),
        catchError((error) =>
          of(cartActions.incrementCartItemFailure({ error })) // Handle error with an action
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
        // Dispatch the loadCart action after successfully deleting the item
        map(() => cartActions.loadCart()), // Dispatch loadCart action here
        catchError((error) => of(cartActions.deleteCartItemFailure({ error })))
      )
    )
  )
);

}

