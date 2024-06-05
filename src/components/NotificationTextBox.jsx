import { Close, Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteNotificacion } from "../store/notificacionsSlice/notificationsSlice";

export const NotificationTextBox = ({ notification }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: "80vw", marginBottom: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">{notification.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {notification.date}
            </Typography>
          </Box>
          <Typography variant="body1">{notification.data}</Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "grid", placeItems: "flex-end" }}>
        <Button
          sx={{ justifyContent: "flex-end" }}
          variant="contained"
          startIcon={<DeleteOutline />}
          onClick={(e) => {
            dispatch(deleteNotificacion(notification.id));
          }}
        >
          Eliminar
        </Button>
      </Box>
    </Card>
  );
};
