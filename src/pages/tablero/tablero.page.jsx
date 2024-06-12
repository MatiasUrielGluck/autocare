import {
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import { dashIconsData } from "../../static_data/dashIcon_data";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { DashboardItem } from "../../components/DashboardItem";
import { useState } from "react";

export const TableroPage = () => {
  let [filter, setFilter] = useState("");

  let dashIcons = dashIconsData;

  const handleChangeFilter = (e) => {
    setFilter(e);
  };

  return (
    <HomeTemplate>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
        <TextField
          placeholder="Filtrar"
          onChange={(e) => handleChangeFilter(e.target.value)}
        />
        {dashIcons
          .filter(
            (x) =>
              x.tittle.toLowerCase().includes(filter.toLowerCase()) ||
              x.desc.toLowerCase().includes(filter.toLowerCase())
          )
          .map((dashIco) => {
            return <DashboardItem dashInfo={dashIco} />;
          })}
      </Box>
    </HomeTemplate>
  );
};
