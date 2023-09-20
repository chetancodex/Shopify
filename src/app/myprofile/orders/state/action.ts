import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/Interfaces/orders.interface";


export const loadOrderItems = createAction('[Order] Load Order');
export const loadOrderItemsSuccess = createAction('[Order] Load Order Success', props<{ orderItems : Order[]}>());
export const loadOrderItemsFailure = createAction('[Order] Load Order Failure', props<{ error : any}>());
