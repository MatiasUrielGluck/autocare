import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregar, editar } from "../store/history/historySlice";

export const HistoryEdit = ({
  historyId,
  setOpen,
  open,
  isCreation = false,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const historial = useSelector((state) => state.history.historial);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isCreation) {
      setTitle("");
      setDescription("");
      setPlace("");
      setDate("");
      return;
    }
    const actividad = historial.find((actividad) => actividad.id === historyId);
    if (!actividad) return;
    setTitle(actividad.title);
    setDescription(actividad.description);
    setPlace(actividad.place);
    setDate(actividad.date);
  }, [historyId, isCreation]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreation = () => {
    const data = {
      id: historial.length,
      title,
      description,
      place,
      date,
    };

    dispatch(agregar(data));
    handleClose()
  };

  const handleEdit = (event) => {
    event.preventDefault();

    if (isCreation) return handleCreation();

    const data = {
      id: historyId,
      title,
      description,
      place,
      date,
    };

    dispatch(
      editar({
        historyId,
        newData: data,
      })
    );

    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            setTitle(formJson.title);
            handleEdit(event);
          },
        }}
      >
        <DialogTitle>{isCreation ? 'Crear actividad' : 'Editar actividad'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="title"
            label="Titulo"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="description"
            label="Descripción"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="place"
            label="Lugar"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="date"
            label="Fecha"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="info" onClick={handleClose}>Cancelar</Button>
          <Button color="info" type="submit">Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
