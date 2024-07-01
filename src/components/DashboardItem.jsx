import {
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useState } from "react";

export const DashboardItem = ({ dashInfo }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
        height: viewMore ? "100%" : 110,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">{dashInfo.tittle}</Typography>
            <Button variant="outlined" onClick={handleViewMore}>
              {!viewMore ? "Ver mas" : "Ver Menos"}
            </Button>
          </Box>
          <Typography variant="h6">
            <p
              dangerouslySetInnerHTML={{
                __html: dashInfo.desc.replaceAll("\n", "<br /><br />"),
              }}
            ></p>
            {/* {dashInfo.desc} */}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, height: "100%", objectFit: "contain" }}
        image={dashInfo.imgPath}
      />
    </Card>
  );
};
