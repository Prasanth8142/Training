
import { createSlice } from "@reduxjs/toolkit"
let slice=createSlice({
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

export let{increment,decrement}=slice.actions
export default slice.reducer
