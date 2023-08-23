import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/Interfaces/product-interface";

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';


export const addToCart = createAction(
    ADD_TO_CART,
    props<{ product : Product}>()
)


export const getCartProducts = createAction(
    GET_CART_PRODUCTS,
    props<{products : Product []}>()
)
export const getCartFailure = createAction(
    GET_CART_FAILURE,
    props<{error : any}>()
)
export const getCartSuccess = createAction(
    GET_CART_SUCCESS,
    props<{products : Product []}>()
)