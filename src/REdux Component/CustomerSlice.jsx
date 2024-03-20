import { createSlice } from "@reduxjs/toolkit";


const initState = [] 
const customerSlice = createSlice(
    {
        name:"Customer",
        initialState:initState,
        reducers:{
            add(state, action){
                state.push(action.payload)
            }
        }
    }
)

export const {add} = customerSlice.actions
export default customerSlice.reducer