import { Box, Button, Card, Container, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import YouTube from "react-youtube";

export const MediaView = ({ gallery }) => {
  const [view, setView] = useState(false);

  const videoSize = {
    height: "250",
    width: "350",
  };

  const handleViewGaleria = () => {
    setView(!view);
  };
  if (!view) {
    return (
      <Button
        onClick={handleViewGaleria}
        variant="contained"
        sx={{ margin: "1rem" }}
      >
        Ver contenido
      </Button>
    );
  }
  return (
    <Modal open={view} onClose={handleViewGaleria}>
      <Carousel
        navButtonsAlwaysVisible={gallery.length > 1}
        navButtonsAlwaysInvisible={gallery.length == 1}
        autoPlay={false}
        fullHeightHover={true}
        sx={{ margin: ".2rem", marginY: "2rem" }}
      >
        {gallery.map((media, idx) => {
          return (
            <Card
              sx={{
                // maxHeight: "80vh",
                borderRadius: "2.3rem",
              }}
            >
              <Container sx={{}}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {media.media ? (
                    <img key={idx} src={`${media.media}`} />
                  ) : (
                    <YouTube videoId={media.video} opts={videoSize} />
                  )}

                  <Container
                    sx={{
                      maxHeight: "60vh",
                      overflow: "auto",
                      paddingX: "2.3rem",
                    }}
                  >
                    <Typography variant="subtitle2">{media.caption}</Typography>
                  </Container>
                </Box>
              </Container>
            </Card>
          );
        })}
      </Carousel>
    </Modal>
  );
};
