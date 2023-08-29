import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems,
    amount: 1,
    total: 0,
    name: '',
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action)=>{
            const amount = action.payload;
            return {...state, amount: amount }
        }
    }
})

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;