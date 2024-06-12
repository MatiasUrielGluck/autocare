import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CarInfo } from "../../components/CarInfo";
import { perfilSelectors, selectCar } from "../../store/perfil/perfilSlice";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { UserInfo } from "./user.info";

export const Perfil = () => {
    const selectedCardId = useSelector(perfilSelectors.getSelectedCarId)
    const cars = useSelector(perfilSelectors.getCars)
    const dispatch = useDispatch()

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