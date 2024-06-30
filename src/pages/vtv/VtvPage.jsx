import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { AddCircle, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VtvEdit } from "../../components/VtvEdit";
import { formatearFechaVencimiento } from "../../helpers/vtv";

export const VtvPage = () => {
  const vtv = useSelector((state) => state.vtv.vtv);

  const [open, setOpen] = useState(false);
  const [hasLoadedVtv, setHasLoadedVtv] = useState(false);
  const [vencimiento, setVencimiento] = useState("-");

  const handleEdit = () => {
    setOpen(true);
  };

  const calcularVencimiento = () => {
    if (!hasLoadedVtv) setVencimiento("-");

    const patente = vtv.patente.trim().replace(/\s+/g, "");
    let mesVencimiento;
    if (patente.length === 6) {
      mesVencimiento = patente[patente.length - 1];
    } else {
      mesVencimiento = patente[4];
    }
    setVencimiento(
      formatearFechaVencimiento(mesVencimiento, vtv.ultimaVerificacion)
    );
  };

  useEffect(() => {
    setHasLoadedVtv(vtv.ultimaVerificacion !== "");
    calcularVencimiento();
  }, [vtv]);

  return (
    <HomeTemplate hideGoBackButton>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
          <VtvEdit open={open} setOpen={setOpen} />
          <Typography variant="h3">V.T.V</Typography>

          <Card
            sx={{
              width: "80vw",
              marginTop: "26px",
              borderRadius: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h6">Última verificación</Typography>
              <Typography variant="h4">
                {vtv.ultimaVerificacion ? vtv.ultimaVerificacion : "-"}
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: "80vw",
              marginTop: "16px",
              borderRadius: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h6">Vencimiento</Typography>
              <Typography variant="h4">{vencimiento}</Typography>
            </CardContent>
          </Card>

          {hasLoadedVtv ? (
            <IconButton
              sx={{
                borderRadius: 50,
                backgroundColor: "#3a3643",
                marginTop: "14px",
              }}
              variant="contained"
              color="info"
              onClick={handleEdit}
            >
              <Edit /> <span style={{ marginLeft: 4 }}>Editar</span>
            </IconButton>
          ) : (
            <IconButton
              sx={{
                borderRadius: 50,
                backgroundColor: "#3a3643",
                marginTop: "14px",
              }}
              variant="contained"
              color="info"
              onClick={handleEdit}
            >
              <AddCircle /> <span style={{ marginLeft: 4 }}>Agregar</span>
            </IconButton>
          )}

          <Typography marginTop="24px" variant="h6">
            <a style={{ color: 'blue' }} href="https://buenosaires.gob.ar/tramites/verificacion-tecnica-vehicular-obligatoria">¿Qué es la VTV?</a>
          </Typography>
        </Box>
      </Container>
    </HomeTemplate>
  );
};
