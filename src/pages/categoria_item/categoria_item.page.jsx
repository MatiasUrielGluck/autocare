import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadCategoriaToView } from "../../store/categoriasProblemas/categoriasProblemasSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, LinearProgress } from "@mui/material";
import { HomeTemplate } from "../../templates/HomeTemplate";
import Carousel from "react-material-ui-carousel";
import { MediaView } from "../../components/MediaView";
import { LockedPremium } from "../../components/common/LockedPremium";

export const CategoriaItemPage = () => {
  const { id } = useParams();
  const categoriasStore = useSelector((state) => state.categoriaProblemas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoriaToView(id));
  }, []);

  return (
    <HomeTemplate>
      {categoriasStore.loading && <LinearProgress />}
      <Card
        sx={{ borderRadius: "1rem", marginBottom: "2rem", textAlign: "center" }}
      >
        <CardContent>
          <h2>{categoriasStore.viewingCategoria.nombre}</h2>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          // width: "100vw",
          // height: "70vh",
          borderRadius: "1rem",
          padding: "1rem",
          margin: "2rem",
        }}
      >
        <div style={{ textWrap: "wrap", overflowX: "auto", maxHeight: "30vh" }}>
          <p>{categoriasStore.viewingCategoria.info}</p>
        </div>

        {categoriasStore.viewingCategoria.gallery && (
          <LockedPremium>
            <MediaView gallery={categoriasStore.viewingCategoria.gallery} />
          </LockedPremium>
        )}
      </Card>
    </HomeTemplate>
  );
};
