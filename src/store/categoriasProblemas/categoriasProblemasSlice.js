import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../helpers/API";
import store from "../store";

export const categoriaProblemasSlice = createSlice({
  name: "categoriaProblemas",
  initialState: {
    categorias: [],
    viewingCategoria: {},
    loading: false
  },
  reducers: {
    loadCategorias: (state) => {
      state.loading = true
      API.fetchCategorias().then(categorias => {
        store.dispatch(setCategorias(categorias))
      })
    },
    setCategorias: (state, action) => {
      state.categorias = action.payload
      state.loading = false
    },
    loadCategoriaToView: (state, action) => {
      let idCategoria = action.payload
      console.log(`loading categoria ${idCategoria}`)
      state.loading = true
      API.fetchInfoCategoria(idCategoria).then(data => {
        store.dispatch(setCategoriaToView(data))
      })
    },
    setCategoriaToView: (state, action) => {
      state.viewingCategoria = action.payload
      state.loading = false

    },
  }
})

export const { loadCategorias, loadCategoriaToView, setCategorias, setCategoriaToView } = categoriaProblemasSlice.actions
export default categoriaProblemasSlice.reducer