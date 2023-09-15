import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from 'src/app/Interfaces/cart.interface';
export interface CartState {
  cartItems: Cart[];
}
export interface AppState {
   cartState : CartState
}

export const initialState: CartState = {
    cartItems: [],
  };
  // Create a feature selector for the 'productState' state slice
  export const selectCartState = createFeatureSelector<CartState>('cartState');
  export const selectAllCartItems = createSelector(
    selectCartState,
    (state: CartState) => state.cartItems
  );
