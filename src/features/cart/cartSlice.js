import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItems";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    name: '',
    isLoading: true
}

export const getCartItems = createAsyncThunk(
    'cart/getCartItems', 
    async () => {
        return await axios(url)
            .then((res)=> res.json())
            .catch(err => console.log(err))
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            return { ...state, cartItems: [] }
        },
        cartTotal: (state, action) => {
            return { ...state, total: action.payload }
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount - 1;
        },
        removeItem: (state, { payload }) => {
            const cartItem = state.cartItems.filter((item) => item.id !== payload);
            return { ...state, cartItems: cartItem }
        },
        totalItems: (state, { payload }) => {
            return { ...state, amount: payload }
        },

    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItem = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const { clearCart, cartTotal, increase, decrease, removeItem, totalItems } = cartSlice.actions;
export default cartSlice.reducer;