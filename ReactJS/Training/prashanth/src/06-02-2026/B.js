import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./A"

 const store =configureStore({
     reducer:{
        counter:counterReducer

     },
 })
 export default store