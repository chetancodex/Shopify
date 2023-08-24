import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";
import * as cartActions from './action';

export interface CartState {
    cartItems: Product[];
}

const initialState: CartState = {
    cartItems: []
}

export const cartReducer = createReducer(
    initialState,
    on(cartActions.loadCartSuccess, (state, { cartItems }) => {
        return { ...state, cartItems };
    }),
    on(cartActions.loadCartFailure, (state) => {
        return state;
    }),
);
