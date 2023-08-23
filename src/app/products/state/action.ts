import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";

export const GET_ALLPRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALLPRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALLPRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const getAllProducts = createAction(
  GET_ALLPRODUCTS,
  props<{ products: Product[] }>()
);
// action.ts

export const getAllProductsSuccess = createAction(
  GET_ALLPRODUCTS_SUCCESS,
  props<{products: Product[] }>()
);

export const getAllProductsFailure = createAction(
  GET_ALLPRODUCTS_FAILURE,
  props<{ error: any }>()
);

export const addToCart = createAction(
  ADD_TO_CART,
  props<{product : Product}>()
)
