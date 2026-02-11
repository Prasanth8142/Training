import { configureStore } from "@reduxjs/toolkit";
import reducer from './Slice'
let store=configureStore({
    reducer:{
        counter:reducer
    },
})

export default store

