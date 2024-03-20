import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './CustomerSlice'

export const store = configureStore({
    reducer:{
        customers: customerReducer
    }
})