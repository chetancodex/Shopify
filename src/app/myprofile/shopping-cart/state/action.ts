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
export const orderCartItem = createAction('[Cart] OrderCart Item',props<{cartData: any[]}>());
export const orderCartItemSuccess = createAction('[Cart] OrderCart Item Success', props<{ cartData : any[]}>());
export const orderCartItemFailure = createAction('[Cart] OrderCart  Item Failure', props<{ error : any}>());
