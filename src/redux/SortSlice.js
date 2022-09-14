import {createSlice} from "@reduxjs/toolkit";


const Sortslice=createSlice({
    name:"sort",
    initialState:{
        filter:{},
        sort:{}
        
    },
    reducers:{
        setfilters:(state,action)=>{
            state.filter = action.payload;
           
        },
        setSort:(state,action)=>{
            state.sort = action.payload;
           
        }
    }
})

export const {setfilters,setSort}=Sortslice.actions;
export default Sortslice.reducer;