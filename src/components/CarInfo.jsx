import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const CarInfo = ({ info }) => {
  const { nombre, ultimaRev, imageSrc } = info;

  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: 110 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            Vehículo
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {"Auto: " + nombre}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {"Última Rev: " + ultimaRev}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150, height: "100%", objectFit: "cover" }}
        image={imageSrc}
        alt="Live from space album cover"
      />
    </Card>
  );
};
