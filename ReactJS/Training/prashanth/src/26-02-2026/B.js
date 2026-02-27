import { configureStore } from '@reduxjs/toolkit'
import a from './A'



let store =configureStore({
    reducer:{
        count:a
    }
})


export default store