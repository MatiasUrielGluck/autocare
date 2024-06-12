import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";
import searchReducer from "./searchResult/searchSlice.js";
import categoriasReducer from "./categoriasProblemas/categoriasProblemasSlice.js";
import notificationsReducer from "./notificacionsSlice/notificationsSlice.js";
import historyReducer from "./history/historySlice.js";
import vtvReducer from "./vtv/vtvSlice.js";
import perfilReducer from "./perfil/perfilSlice.js"

export default configureStore({
  reducer: {
    counter: counterReducer,
    searchResult: searchReducer,
    categoriaProblemas: categoriasReducer,
    notifications: notificationsReducer,
    history: historyReducer,
    vtv: vtvReducer,
    perfil: perfilReducer
  },
});
