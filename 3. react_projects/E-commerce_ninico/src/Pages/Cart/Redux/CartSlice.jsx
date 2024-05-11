import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice
({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCart : (state, action)=>{
            state.cart.push(action.payload)
        }
    }
})

export default CartSlice.reducer;

export const {AddToCart} =  CartSlice.actions