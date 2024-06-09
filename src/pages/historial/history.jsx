import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { eliminar } from "../../store/history/historySlice";

export const History = ({ history, handleEdit }) => {
  const dispatch = useDispatch();

  const deleteHistory = (historyId) => {
    dispatch(eliminar(historyId));
  };

  const editHistory = (historyId) => {
    handleEdit(historyId);
  };

  return (
    <Card sx={{ width: "80vw", marginBottom: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{history.title}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ height: "min-content" }}
            >
              {history.date}
            </Typography>
          </Box>
          <Typography variant="body1">{history.description}</Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ height: "min-content", paddingLeft: "16px" }}
        >
          {history.place}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <Button
            sx={{ justifyContent: "flex-end" }}
            variant="contained"
            startIcon={<EditOutlined />}
            onClick={(e) => {
              editHistory(history.id);
            }}
          ></Button>
          <Button
            sx={{ justifyContent: "flex-end" }}
            variant="contained"
            startIcon={<DeleteOutline />}
            onClick={(e) => {
              deleteHistory(history.id);
            }}
          ></Button>
        </Box>
      </Box>
    </Card>
  );
};
