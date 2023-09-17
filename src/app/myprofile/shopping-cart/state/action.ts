import { createAction, props } from '@ngrx/store';
import { Cart } from 'src/app/Interfaces/cart.interface';

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cartItems: Cart[] }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
export const updateCartItem = createAction('[Cart] updateCart Item', props<{ productId : any , quantity : any}> ());
export const updateCartItemFailure = createAction('[Cart]  updateCartItem Failure', props <{error : any}>());
export const deleteCartItem = createAction('[Cart] Delete Cart', props<{ productId : any}>());
export const deleteCartItemSuccess = createAction('[Cart] Delete Cart Success', props<{ productId: any}>());
export const deleteCartItemFailure = createAction('[Cart] Delete Cart Failure', props<{ error: any }>());
