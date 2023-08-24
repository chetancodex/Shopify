import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";
import * as productActions from "./action";
import { state } from "@angular/animations";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,

  on(productActions.getAllProductsSuccess, (state, { products }) => {
    return { ...state, products };
  }),
  on(productActions.getAllProductsFailure, (state, {error}) => {
    return {...state , error};
  }
) );
