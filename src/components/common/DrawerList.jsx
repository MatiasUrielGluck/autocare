import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import HistoryIcon from "@mui/icons-material/History";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";

export const DrawerList = ({ toggleDrawer }) => {
  const [viewSendFeedback, setViewSendFeedback] = useState(false);
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);
  const navigate = useNavigate();

  const handleViewSendFeedback = () => {
    setViewSendFeedback(!viewSendFeedback);
  };

  const drawerItems = [
    {
      label: "Mi perfil",
      route: "/perfil",
      icon: <PersonIcon />,
    },
    {
      label: "Historial auto",
      route: "/history",
      icon: <HistoryIcon />,
    },
    {
      label: "VTV",
      route: "/vtv",
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {drawerItems.map((item, index) => (
            <ListItem
              key={item.label}
              disablePadding
              onClick={() => {
                toggleDrawer();
                navigate(item.route);
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Danos tu feedback"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={handleViewSendFeedback}
            >
              <ListItemButton>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Modal
        open={viewSendFeedback}
        onClose={handleViewSendFeedback}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Card sx={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                Envia tu feedback
              </Typography>
              {feedbackEnviado && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle fontSize="large" />
                  <Typography variant="h6">
                    ¡Muchas gracias por su comentario!
                    <br></br>
                    Su consulta fue enviada y sera recibida por nuestro equipo,
                    en cuanto podamos atender su solicitud, nos contactaremos
                    por email en caso de ser necesario.
                  </Typography>
                </div>
              )}
              {!feedbackEnviado && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <TextField label={"Su comentario aqui"}></TextField>
                  <Button
                    variant="contained"
                    onClick={(e) => setFeedbackEnviado(true)}
                  >
                    Enviar
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </Container>
      </Modal>
    </>
  );
};
