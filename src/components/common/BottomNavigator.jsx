import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import NotificationIcon from "@mui/icons-material/Notifications";

export const BottomNavigator = () => {
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
        <BottomNavigationAction label="Menu principal" icon={<HomeIcon />} />
        <BottomNavigationAction label="Ayuda" icon={<HelpIcon />} />
        <BottomNavigationAction
          label="Notificaciones"
          icon={<NotificationIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
