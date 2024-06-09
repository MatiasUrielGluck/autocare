import { createSlice } from "@reduxjs/toolkit";
import { historial } from "../../data/historial";

export const historySlice = createSlice({
  name: "history",
  initialState: { historial: historial },
  reducers: {
    agregar: (state, action) => {
      state.historial.unshift(action.payload);
    },
    eliminar: (state, action) => {
      state.historial = state.historial.filter(
        (actividad) => actividad.id !== action.payload
      );
    },
    editar: (state, action) => {
      const { historyId, newData } = action.payload
      const history = state.historial.find(actividad => actividad.id === historyId)
      history.title = newData.title;
      history.description = newData.description;
      history.place = newData.place;
      history.date = newData.date;
    },
  },
});

// Action creators are generated for each case reducer function
export const { agregar, eliminar, editar } = historySlice.actions;

export default historySlice.reducer;
