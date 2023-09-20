import { createFeatureSelector, createSelector } from '@ngrx/store';    
import { Order } from "src/app/Interfaces/orders.interface";

export interface OrderState {
    orderItems : Order[]
}
export interface AppState {
    orderState : OrderState
}

export const initialState: OrderState = {
    orderItems : []
};
export const  selectOrderState = createFeatureSelector<OrderState>('orderState');
export const selectAllOrderItems = createSelector(
    selectOrderState,
    (state: OrderState) => state.orderItems
)