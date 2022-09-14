import {configureStore} from "@reduxjs/toolkit";
import reducers from "./Cartredux";
import Userreducers from "./userSlice";
import filterreducer from "./SortSlice";


export default configureStore({
    reducer:{
        cart:reducers,
        user:Userreducers,
        filters:filterreducer
    }
})