import { Box, Button, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom";
import GoBackIcon from "/src/assets/icon/goback.png";

export const ButtonGoBack = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return <IconButton
        sx={{ borderRadius: 50, backgroundColor: "#211F26" }}
        variant="contained"
        color="success"
        onClick={handleGoBack}>
            <Box sx={{ paddingLeft: 2, paddingRight: 2 }}>
                <img src={GoBackIcon} style={{ paddingRight: 10 }} />
                Volver
            </Box>
        </IconButton>
}