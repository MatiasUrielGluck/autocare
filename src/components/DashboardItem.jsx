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
              {!viewMore ? "Ver Mas" : "Ver Menos"}
            </Button>
          </Box>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            velit illo doloribus eos molestias facilis quam ducimus perferendis
            aspernatur, minus repellat numquam obcaecati dicta tempora sint ea
            architecto possimus recusandae. A harum quas, voluptatibus soluta
            ipsam tempora id excepturi rem delectus molestias, totam, dolorem
            nisi. Nobis temporibus voluptatem, assumenda aut nisi sequi,
            corporis ipsam rem, magnam numquam natus. Sequi, nobis vero eveniet
            voluptate pariatur incidunt temporibus architecto repudiandae atque
            non. Cumque nisi, blanditiis in harum doloribus temporibus
            voluptatibus quisquam voluptate atque nihil consectetur aspernatur.
            Doloribus saepe voluptatem ab neque, unde non possimus accusamus
            vero magni esse officia nesciunt corporis error.
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
