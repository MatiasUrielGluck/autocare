import { useState } from "react";

import { Box, Drawer, IconButton } from "@mui/material";

import { DrawerList } from "../../components/common/DrawerList";
import { CarInfo } from "../../components/CarInfo";
import { MenuRounded } from "@mui/icons-material";
import { SearchBar } from "../../components/SearchBar";
import { ActionsContainer } from "../../components/ActionsContainer";
import { BottomNavigator } from "../../components/common/BottomNavigator";

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        m: 1,
        display: "flex",
        flexFlow: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
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

      <CarInfo />
      <SearchBar />
      <ActionsContainer />
      <BottomNavigator />
      <div style={{ marginBottom: 100 }}></div>
    </Box>
  );
};
