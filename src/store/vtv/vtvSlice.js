import { createSlice } from "@reduxjs/toolkit";

export const vtvSlice = createSlice({
  name: "vtv",
  initialState: { vtv: { patente: "", ultimaVerificacion: "" } },
  reducers: {
    editar: (state, action) => {
      const { patente, ultimaVerificacion } = action.payload;
      state.vtv.patente = patente;
      state.vtv.ultimaVerificacion = ultimaVerificacion;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editar } = vtvSlice.actions;

export default vtvSlice.reducer;
