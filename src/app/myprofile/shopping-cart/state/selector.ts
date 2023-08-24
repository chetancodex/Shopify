import { createSelector } from "@ngrx/store";
import { Products } from "src/app/products/state/selector";

export interface Cart {
    cartItems : Products[]
}
export interface AppState {
    cartItems : Cart
}

export const selectCart = (state : AppState) => state.cartItems;
export const selectUserCart = createSelector(
    selectCart,
    (cartState : Cart) => cartState.cartItems
)