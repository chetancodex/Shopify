import { createReducer, on } from '@ngrx/store';
import * as cartActions from './action';
import { Cart } from 'src/app/Interfaces/cart.interface';

export interface CartState {
  cartItems: Cart[],
}

const initialState: CartState = {
  cartItems: [],  
};

export const cartReducer = createReducer(
  initialState,
  on(cartActions.loadCartSuccess, (state, { cartItems }) => {
    return { ...state, cartItems };
  }),
  on(cartActions.loadCartFailure, (state) => {
    return state;
  }),
  on(cartActions.deleteCartItemSuccess, (state, { productId }) => {
    console.log('reducer')
    const updatedCartItems = state.cartItems.filter(
      (item : Cart) => item.productId  !== productId
    );
    return { ...state, cartItems: updatedCartItems };
  }),
  on(cartActions.deleteCartItemFailure, (state) => {
    return state;
  })
);
