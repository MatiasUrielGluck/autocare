import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice.js";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})