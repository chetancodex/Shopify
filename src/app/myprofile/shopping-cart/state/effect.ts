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

  deleteCartItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(cartActions.deleteCartItem),
    switchMap((action) =>
      this.cartService.deleteProduct(action.productId).pipe(
        tap(() => console.log('on efffects')),
        map((productId: any) => 
          cartActions.deleteCartItemSuccess({ productId })),
        catchError((error) => of(cartActions.deleteCartItemFailure({ error })))
      )
    )
  )
);
}

