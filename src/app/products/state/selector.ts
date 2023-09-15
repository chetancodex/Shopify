import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";

export interface ProductState {
  products: Product[];
}

export interface AppState {
    productState: ProductState;
  }
  

export const initialState: ProductState = {
  products: [],
};
// Create a feature selector for the 'productState' state slice
export const selectProductsState = createFeatureSelector<ProductState>('productState');
export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductState) => state.products
);

