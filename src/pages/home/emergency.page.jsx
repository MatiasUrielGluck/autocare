import { Box, IconButton } from "@mui/material";
import { HomeTemplate } from "../../templates/HomeTemplate";
import AmbulanceIcon from "/src/assets/icon/ambulance.png";
import FireFighterIcon from "/src/assets/icon/fireFighter.png";
import PoliceIcon from "/src/assets/icon/police.png";
import InsuranceIcon from "/src/assets/icon/insurance.png";

const EmergencyCard = ({ image, title }) => (
    <Box sx={{ display: "flex", flexDirection: "column", paddingX: 1}}>
        <Box 
            sx={{
                borderRadius: "20px",
                bgcolor: "primary.light",
                textAlign: "center",
                width: "100%",
                }}>
            <IconButton>
                <img src={image} /> 
            </IconButton>
        </Box>
        <Box sx={{ textAlign: "center", color:"secondary.light" }}>{title}</Box>
    </Box>
)

export const EmegencyPage = () => {

  return (
    <HomeTemplate>
            <Box  sx={{ display: "flex", flexDirection:"column", justifyContent: "start" }}>
                <Box  sx={{ paddingBottom: 4, display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            paddingX: 3,
                            paddingY: 3,
                            borderRadius: "20px",
                            bgcolor: "#211F26",
                            textAlign: "center",
                            width: "80%",
                        }} >
                        <p>Emergencias</p>
                    </Box>
                </Box>
                <Box  sx={{ paddingBottom: 4, display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: "80%",
                            paddingX: 3,
                            paddingY: 3,
                            borderRadius: "20px",
                            bgcolor: "#211F26",
                            textAlign: "center",
                        }} >
                        <p>Seleccione una opcion para comunicarse con los siguientes numeros de emergencia</p>
                    </Box>
                </Box>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: "80%",
                            paddingX: 3,
                            paddingY: 3,
                            borderRadius: "20px",
                            bgcolor: "#211F26",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <Box  sx={{ paddingBottom: 4, display: "flex", justifyContent: "center" }}>
                            <EmergencyCard image={AmbulanceIcon} title={"Ambulancia"} />
                            <EmergencyCard image={FireFighterIcon} title={"Bomberos"} />
                        </Box>
                        <Box  sx={{ paddingBottom: 4, display: "flex", justifyContent: "center" }}>
                            <EmergencyCard image={PoliceIcon} title={"Policía"} />
                            <EmergencyCard image={InsuranceIcon} title={"Seguro"} />
                        </Box>
                    </Box>
                </Box>
            </Box>

    </HomeTemplate>
  );
};
