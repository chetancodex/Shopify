import { createReducer, on } from "@ngrx/store";
import { Order } from "src/app/Interfaces/orders.interface";
import * as orderActions from './action'
export interface OrderState {
    orderItems : Order[]
}
const initialState : OrderState = {
    orderItems : []
}

export const OrderReducer = createReducer(
    initialState,
    on(orderActions.loadOrderItemsSuccess, (state, { orderItems }) => {
        return { ...state , orderItems }
    }),
    on(orderActions.loadOrderItemsFailure, (state) => {
        return state;
    })
)