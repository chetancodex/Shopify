import { createSelector } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";

export interface Products {
    products : Product[]
}
export interface AppState {
    products : Products
}

export const selectProducts = (state  :AppState)=> state.products;
export const selectAllProducts = createSelector(
    selectProducts,
    (productsState : Products) => productsState.products    
)

