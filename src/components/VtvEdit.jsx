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
import { editar } from "../store/vtv/vtvSlice";

export const VtvEdit = ({ setOpen, open }) => {
  const [patente, setPatente] = useState("");
  const [ultimaVerificacion, setUltimaVerificacion] = useState("");

  const vtv = useSelector((state) => state.vtv.vtv);
  const dispatch = useDispatch();

  useEffect(() => {
    setPatente(vtv.patente);
    setUltimaVerificacion(vtv.ultimaVerificacion);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const data = {
      patente: patente,
      ultimaVerificacion: ultimaVerificacion,
    };

    dispatch(editar(data));

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
            handleEdit(event);
          },
        }}
      >
        <DialogTitle>Datos de la VTV</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="patente"
            label="Patente"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="ultimaVerficiacion"
            label="Última verficación"
            type="text"
            fullWidth
            variant="standard"
            color="info"
            value={ultimaVerificacion}
            onChange={(e) => setUltimaVerificacion(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="info" onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="info" type="submit">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
