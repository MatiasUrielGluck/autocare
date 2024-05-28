import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice.js";
import searchReducer from "./searchResult/searchSlice.js"

export default configureStore({
    reducer: {
        counter: counterReducer,
        searchResult: searchReducer
    },
})