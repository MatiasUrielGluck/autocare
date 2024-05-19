import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CarInfo = () => {
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: 110 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            Su información
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Auto: Fiat Mobi 2016
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Última Rev: 25/05/2023
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150, height: "100%", objectFit: "cover" }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fiat_Mobi_Trekking_1.0_2021_in_Montevideo_%28front%29.jpg/1200px-Fiat_Mobi_Trekking_1.0_2021_in_Montevideo_%28front%29.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};
