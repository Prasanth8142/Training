import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({
    name:"Prashanth",
    initalState:{value:10},
    reducers:{
        increment:(state)=>{
         state.value +=1
        },
        decrement:(state)=>{
       state.value -=1
        }
    }
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer