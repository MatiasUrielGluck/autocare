import { useContext } from "react";
import { ActionsContainer } from "../../components/ActionsContainer";
import { CarInfo } from "../../components/CarInfo";
import { ResultBox } from "../../components/ResultBox";
import { SearchBar } from "../../components/SearchBar";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { Box, LinearProgress } from "@mui/material";
import { UserInfo } from "./person.info";
import { perfilSelectors, selectCar } from "../../store/perfil/perfilSlice";

export const Perfil = () => {
    const selectedCardId = useSelector(perfilSelectors.getSelectedCarId)
    const cars = useSelector(perfilSelectors.getCars)
    const dispatch = useDispatch()
console.log(selectedCardId)
    const handleSelectCar = (id) => {
        console.log(id)
        dispatch(selectCar({ id }))
    }

    return <HomeTemplate>
        <Box sx={{ display: "flex", rowGap: 2, flexDirection: "column" }}>
            <UserInfo />

            <Box>
                Sus vehículos
            </Box>

            {cars.map((car) => 
                car.id === selectedCardId ?
                        <Box border={6} borderColor="primary.light">
                            <CarInfo info={car} />
                        </Box> 
                    :
                        <Box sx={{ opacity: 0.3 }} onClick={() => handleSelectCar(car.id)}>
                            <CarInfo info={car} />
                        </Box>
            )}
        </Box>
    </HomeTemplate>
}