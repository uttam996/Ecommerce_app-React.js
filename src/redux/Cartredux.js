import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addproduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.qunatity;
        }
    }
})

export const {addproduct}=cartSlice.actions;
export default cartSlice.reducer;
