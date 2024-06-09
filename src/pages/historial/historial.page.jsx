import { HomeTemplate } from "../../templates/HomeTemplate";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { History } from "./history";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { HistoryEdit } from "../../components/HistoryEdit";
import { useState } from "react";

export const HistorialPage = () => {
  const historial = useSelector((state) => state.history.historial);

  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState('creation'); // 'creation' | 'edition'
  const [historyId, setHistoryId] = useState(0);

  const handleAdd = () => {
    setDialogType('creation')
    setOpen(true)
  };

  const handleEdit = (id) => {
    setDialogType('edition')
    setHistoryId(id)
    setOpen(true)
  };

  return (
    <HomeTemplate hideGoBackButton>
      <Container maxWidth="lg">
        <HistoryEdit open={open} setOpen={setOpen} historyId={historyId} isCreation={dialogType === 'creation'} />
        {historial.length ? (
          historial.map((actividad, index) => {
            return <History history={actividad} handleEdit={handleEdit} key={index} />;
          })
        ) : (
          <Typography>Sin historial</Typography>
        )}
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 70,
            left: 0,
            paddingY: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ borderRadius: 50, backgroundColor: "#3a3643" }}
            variant="contained"
            color="success"
            onClick={handleAdd}
          >
            <AddCircle /> <span style={{ marginLeft: 4 }}>Agregar</span>
          </IconButton>
        </Box>
      </Container>
    </HomeTemplate>
  );
};
