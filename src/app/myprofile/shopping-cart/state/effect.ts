import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
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
          map((cartItems) => cartActions.loadCartSuccess({ cartItems })),
          catchError((error) => of(cartActions.loadCartFailure({ error })))
        )
      )
    )
  );
}
