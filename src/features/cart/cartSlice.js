import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems,
    amount: 0,
    total: 0,
    name: '',
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state)=>{
            return {...state, cartItems: [] }
        },
        cartTotal: (state, action) => {
            return {...state, total: action.payload} 
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=> item.id === payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=> item.amount > 0 && item.id === payload);
            cartItem.amount = cartItem.amount - 1;
        },
        removeItem: (state, {payload}) => {
            const cartItem = state.cartItems.filter((item)=> item.id !== payload);
            return {...state, cartItems: cartItem}
        },
        totalItems: (state, {payload}) => {
            return {...state, amount: payload}
        }
        
    }
})

export const { clearCart, cartTotal, increase, decrease, removeItem, totalItems } = cartSlice.actions;
export default cartSlice.reducer;