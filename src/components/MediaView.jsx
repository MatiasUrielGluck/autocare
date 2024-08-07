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
                minHeight: "30vh",
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignContent: "center",
                    // justifyContent: "center",
                    // justifyItems: "center",
                  }}
                >
                  {media.media ? (
                    <img key={idx} src={`${media.media}`} />
                  ) : (
                    <YouTube
                      videoId={media.video}
                      opts={videoSize}
                      style={{
                        margin: "auto",
                        marginTop: "1.5rem",
                      }}
                    />
                  )}

                  <Container
                    sx={{
                      minHeight: "40vh",
                      maxHeight: "60vh",
                      overflow: "auto",
                      paddingX: "2.3rem",
                    }}
                  >
                    <Typography variant="subtitle2">{media.caption}</Typography>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: media.caption.replaceAll("\n", "<br /><br />"),
                      }}
                      style={{ marginBottom: 56 }}
                    ></p>
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
