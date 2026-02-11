import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"Prashanth",
    initialState:{value:10},
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }

    }
})
export const{increment,decrement}=slice.actions
export default slice.reducer