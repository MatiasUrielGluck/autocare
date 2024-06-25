import { Box, Button } from "@mui/material";
import ManualIcon from "../assets/icon/manual.png";
import AlertIcon from "../assets/icon/alert.png";
import TableroIcon from "../assets/icon/tablero.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { perfilSelectors } from "../store/perfil/perfilSlice";
import { LockedPremium } from "./common/LockedPremium";

export const ActionsContainer = () => {
  const navigate = useNavigate();
  const selectedCarInfo = useSelector(perfilSelectors.getSelectedCarInfo);

  const handleIHaveAnEmergency = () => {
    navigate("/emergencia");
  };

  const handleRouteCategoriaProblemas = () => {
    navigate("/problemas");
  };

  const handleRouteManualView = () => {
    navigate("/manual");
  };

  const handleRouteDashView = () => {
    navigate("/dashboard");
  };

  return (
    <Box>
      <Box
        sx={{
          marginTop: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "46vw",
            height: "46vw",
            display: "grid",
            placeItems: "center",
            position: "relative",
            borderRadius: "6px",
            bgcolor: "primary.light",
          }}
        >
          <img style={{ width: "100%" }} src={selectedCarInfo.brandImage} />
          <Button
            onClick={handleRouteCategoriaProblemas}
            sx={{
              borderRadius: 50,
              padding: "4px",
              maxWidth: 130,
              height: 45,
              lineHeight: "18px",
              position: "absolute",
              bottom: "10px",
            }}
            variant="contained"
            size="small"
            color="primary"
          >
            Categoría de problemas
          </Button>
        </Box>

        <Box
          sx={{
            width: "46vw",
            height: "46vw",
            display: "grid",
            placeItems: "center",
            position: "relative",
            borderRadius: "6px",
            bgcolor: "primary.light",
          }}
        >
          <img style={{ width: "100%" }} src={ManualIcon} />
          <Button
            sx={{
              borderRadius: 50,
              padding: "4px",
              maxWidth: 90,
              width: "100%",
              height: 45,
              lineHeight: "18px",
              position: "absolute",
              bottom: "10px",
            }}
            variant="contained"
            size="small"
            color="primary"
            onClick={handleRouteManualView}
          >
            Manual
          </Button>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "12px",
            width: "100%",
            height: 80,
            display: "flex",
            placeItems: "center",
            justifyContent: "space-between",
            paddingX: 3,
            borderRadius: "6px",
            bgcolor: "primary.light",
          }}
        >
          <img style={{ height: "90%" }} src={AlertIcon} />
          <Button
            sx={{
              borderRadius: 50,
              padding: "10px",
              lineHeight: "18px",
            }}
            variant="contained"
            size="small"
            color="primary"
            onClick={handleIHaveAnEmergency}
          >
            Tengo una emergencia
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            marginTop: "12px",
            width: "100%",
            height: 180,
            display: "grid",
            placeItems: "center",
            borderRadius: "6px",
            backgroundImage: `url(${TableroIcon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            bgcolor: "primary.light",
          }}
        >
          <LockedPremium>
            <Button
              sx={{
                borderRadius: 50,
                padding: "10px",
                lineHeight: "18px",
              }}
              variant="contained"
              size="small"
              color="primary"
              onClick={handleRouteDashView}
            >
              Mi tablero
            </Button>
          </LockedPremium>
        </Box>
      </Box>
    </Box>
  );
};
