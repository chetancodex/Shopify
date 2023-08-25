import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductApiService } from '../api.service.products';
import * as productActions from './action'; // Make sure to import your action from the correct path
import { Product } from 'src/app/Interfaces/product-interface';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService,
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.getAllProducts),
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

    addToCart$ = createEffect(() => 
      this.actions$.pipe(
        ofType(productActions.addToCart),
        switchMap((action) => 
          this.productApiService.AddtoCart(action.product).pipe( 
            map((product: Product) => 
              productActions.addToCartSuccess({ product })),
            catchError((error) => 
              of(productActions.addToCartFailure({error}))
            )
          )
        )
      )
    );


}


