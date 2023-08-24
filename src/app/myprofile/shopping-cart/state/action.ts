import { createAction, props } from '@ngrx/store';
import { Product } from '../../../Interfaces/product-interface';

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cartItems: Product[] }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
