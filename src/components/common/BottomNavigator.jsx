import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import NotificationIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";

export const BottomNavigator = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        paddingY: 1,
        background: "#211F26",
      }}
    >
      <BottomNavigation sx={{ background: "#211F26" }} showLabels>
        <BottomNavigationAction
          label="Menu principal"
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction label="Ayuda" icon={<HelpIcon />} />
        <BottomNavigationAction
          label="Notificaciones"
          icon={<NotificationIcon />}
          onClick={() => navigate("/notifications")}
        />
      </BottomNavigation>
    </Box>
  );
};
