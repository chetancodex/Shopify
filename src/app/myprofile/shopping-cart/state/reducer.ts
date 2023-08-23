import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";
import * as cartActions from './action' 
import { state } from "@angular/animations";
export interface CartState {
    products : Product[]
}
const intialState : CartState =  {
    products : [] 
}

export const cartReducer = createReducer(
    intialState , 
    on(cartActions.getCartProducts, (state, { products }) => {
        return { ...state, products };
      })
    
)