import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductApiService } from '../api.service.products';
import * as productActions from './action'; // Make sure to import your action from the correct path

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.getAllProducts), // Replace with your action
      switchMap(() =>
      
        this.productApiService.getProducts().pipe(
          map((products) =>
            productActions.getAllProductsSuccess({ products })
          ),
          catchError((error) =>
            of(productActions.getAllProductsFailure({ error }))
          )
        )
      )
    )
  );
}
