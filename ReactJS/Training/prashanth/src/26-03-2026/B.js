import { configureStore } from "@reduxjs/toolkit";
import s from './A';

let store = configureStore({
  reducer: {
    count: s
  }
});

export default store;