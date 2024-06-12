import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import HistoryIcon from "@mui/icons-material/History";
import DescriptionIcon from "@mui/icons-material/Description";

export const DrawerList = ({ toggleDrawer }) => {
  const navigate = useNavigate();

  const drawerItems = [
    {
      label: "Mi perfil",
      route: "/perfil",
      icon: <PersonIcon />,
    },
    {
      label: "Historial auto",
      route: "/history",
      icon: <HistoryIcon />,
    },
    {
      label: "VTV",
      route: "/vtv",
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem
            key={item.label}
            disablePadding
            onClick={() => navigate(item.route)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Danos tu feedback"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
