import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice.js";
import searchReducer from "./searchResult/searchSlice.js"
import categoriasReducer from './categoriasProblemas/categoriasProblemasSlice.js'


export default configureStore({
    reducer: {
        counter: counterReducer,
        searchResult: searchReducer,
        categoriaProblemas: categoriasReducer
    },
})