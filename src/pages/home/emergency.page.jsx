import { Box, Button, IconButton } from "@mui/material";
import { HomeTemplate } from "../../templates/HomeTemplate";
import AmbulanceIcon from "/src/assets/icon/ambulance.png";
import FireFighterIcon from "/src/assets/icon/fireFighter.png";
import PoliceIcon from "/src/assets/icon/police.png";
import InsuranceIcon from "/src/assets/icon/insurance.png";
import { useState } from "react";

export const EmegencyPage = () => {

    const [calling, setCalling] = useState(false);
    const [callData, setCallData] = useState()

    const EmergencyCard = ({ image, title, number }) => {
        const [showNumber, setShowNumber] = useState(false)

        return (
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", paddingX: 1}}>
                {showNumber && 
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center"  }}>
                        <Box sx={{ paddingTop: 2, textAlign: "center" }}>{title}</Box>
                        <Box sx={{ paddingY: 1, textAlign: "center" }}>{number}</Box>
                        <Button sx={{ fontSize: 14,  borderRadius: 50, backgroundColor: "secondary.light" }}
                            label="Llamar"
                            onClick={() => {
                                setCalling(true)
                                setCallData({ title, number })
                            }}>
                            <Box>Llamar</Box>
                        </Button>
                    </Box>
                }
                {!showNumber && 
                    <>
                        <Box 
                            sx={{
                                borderRadius: "15px",
                                bgcolor: "primary.light",
                                textAlign: "center",
                                width: "100%",
                                }}> 
                            <IconButton onClick={() => setShowNumber(true)}>
                                <img src={image} /> 
                            </IconButton>
                        </Box>
                        <Box sx={{ textAlign: "center", color:"secondary.light" }}>{title}</Box>
                    </>
                }
            </Box>
        )
    }
    
    return (
        <>
        {calling && (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingY: 30, fontSize: 30 }}>
                <p>{`Llamando al ${callData.number}...`}</p>
                <p>{`(${callData.title})`}</p>
                <Box sx={{paddingTop: 7}}>
                    <Button sx={{ paddingX: 4, paddingY: 2, fontSize: 20,  borderRadius: 50, backgroundColor: "secondary.light" }} onClick={() => setCalling(false)}>Cancelar</Button>
                </Box>
            </Box>
        )}
        {!calling &&
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
                                    fontSize: 25,
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
                                    <Box  sx={{ paddingBottom: 2, display: "flex", justifyContent: "space-between" }}>
                                        <EmergencyCard image={AmbulanceIcon} title={"Ambulancia"} number="107" />
                                        <EmergencyCard image={FireFighterIcon} title={"Bomberos"} number="100" />
                                    </Box>
                                    <Box  sx={{ paddingBottom: 2, display: "flex", justifyContent: "space-between" }}>
                                        <EmergencyCard image={PoliceIcon} title={"Policía"} number="911" />
                                        <EmergencyCard image={InsuranceIcon} title={"Seguro"} number="0810-444-0107" />
                                    </Box>
                            </Box>
                        </Box>
                    </Box>

            </HomeTemplate>}
        </>
  );
};
