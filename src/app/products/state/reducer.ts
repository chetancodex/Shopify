import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";
import * as productActions from "./action";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,

  on(productActions.getAllProducts, (state, { products }) => {
    return { ...state, products };
  })
);
