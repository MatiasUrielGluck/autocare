import { createSlice } from "@reduxjs/toolkit";
import MercedesImage from "/src/assets/cars/mercedes.png";
import FiatLogo from "/src/assets/logo/fiat.png";
import MercedesLogo from "/src/assets/logo/mercedesLogo.png";

const defaultCars = [
    {
        id: 1,
        nombre: "Fiat Mobi 2016",
        ultimaRev: "25/05/2023",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fiat_Mobi_Trekking_1.0_2021_in_Montevideo_%28front%29.jpg/1200px-Fiat_Mobi_Trekking_1.0_2021_in_Montevideo_%28front%29.jpg",
        brandImage: FiatLogo,
        manualSrc: "/manuals/Fiat Mobi 2016.pdf",
    },
    {
        id: 2,
        nombre: "Mercedes EQE 350",
        ultimaRev: "03/10/2023",
        imageSrc: MercedesImage,
        brandImage: MercedesLogo,
        manualSrc: "/manuals/Mercedes EQE.pdf",
    }
]

export const perfilSlice = createSlice({
  name: "perfil",
  initialState: { selectedCar: 1, cars: defaultCars },
  reducers: {
    selectCar: (state, action) => {
      const { id } = action.payload;
      console.log(id)
      state.selectedCar = id;
    },
  },
});

export const perfilSelectors = {
    getSelectedCarInfo: (state) => {
        const selectedCarId = state.perfil.selectedCar;
        const cars = state.perfil.cars;
        console.log(cars, selectedCarId)
        return cars.find((car) => car.id === selectedCarId)
    },
    getCars: (state) => state.perfil.cars,
    getSelectedCarId: (state) => state.perfil.selectedCar,
}

// Action creators are generated for each case reducer function
export const { selectCar } = perfilSlice.actions;

export default perfilSlice.reducer;
