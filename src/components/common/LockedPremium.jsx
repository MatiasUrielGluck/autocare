import { Container } from "@mui/system";
import { UNLOCK_ALL } from "../../config";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { Lock, LockOpen } from "@mui/icons-material";
import { useState } from "react";

export const LockedPremium = ({ children }) => {
  const unlocked = UNLOCK_ALL;
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  if (unlocked == "true") {
    return children;
  }

  return (
    <>
      <div
        style={{
          // display: "inline-block",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
        <button
          onClick={handleOpenModal}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.7)",
            borderRadius: "1rem",
            border: "0",
          }}
        >
          <LockOpen
            fontSize="large"
            color="action"
            sx={{
              stroke: "white",
            }}
          />
        </button>
        <Modal
          open={open}
          onClose={handleOpenModal}
          sx={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Card>
              <CardContent>
                <Typography variant="h5">Contenido bloqueado</Typography>
                <Typography variant="body1">
                  Este contenido solo esta disponible para usarios premium
                </Typography>
                <br></br>
                <Button variant="contained">
                  Desbloquear ahora por USD 3.99
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Modal>
      </div>
    </>
  );
};
