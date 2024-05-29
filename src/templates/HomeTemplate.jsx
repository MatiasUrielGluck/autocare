import { MenuRounded } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import { DrawerList } from "../components/common/DrawerList";
import { BottomNavigator } from "../components/common/BottomNavigator";
import { useState } from "react";
import { ButtonGoBack } from "../components/common/ButtonGoBack";

export const HomeTemplate = ({ children, hideGoBackButton }) => {
  const [open, setOpen] = useState(false);

  const ButtonGoBackWrapper = () => (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        paddingY: 1,
        display: "flex",
        justifyContent: "start",
      }}
    >
      <ButtonGoBack />
    </Box>
  );

  return (
    <Box
      sx={{
        m: 1,
        display: "flex",
        flexFlow: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <IconButton
          sx={{ justifyContent: "flex-start" }}
          onClick={() => setOpen(true)}
        >
          <MenuRounded />
        </IconButton>
      </Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerList toggleDrawer={() => setOpen(false)} />
      </Drawer>
      <Box>{children}</Box>
      {!hideGoBackButton && <ButtonGoBackWrapper />}
      <BottomNavigator />
      <div style={{ marginBottom: 100 }}></div>
    </Box>
  );
};
