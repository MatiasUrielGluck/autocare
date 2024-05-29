import { useDispatch, useSelector } from "react-redux";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect } from "react";
import { loadCategorias } from "../../store/categoriasProblemas/categoriasProblemasSlice";
import { Card, CardContent, LinearProgress, List } from "@mui/material";
import { CategoriaButton } from "../../components/CategoriaButton";
import { DrawerList } from "../../components/common/DrawerList";

export const ProblemsCategoryPage = () => {
  const categoriasStore = useSelector((state) => state.categoriaProblemas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategorias());
  }, []);

  return (
    <HomeTemplate>
      {categoriasStore.loading && <LinearProgress />}
      <Card sx={{ borderRadius: "1rem", marginBottom: "2rem" }}>
        <CardContent>
          <h2>Categoría de problemas</h2>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: "1rem" }}>
        <List>
          {categoriasStore.categorias.map((categoria) => (
            <CategoriaButton key={categoria.id} categoria={categoria} />
          ))}
        </List>
      </Card>
    </HomeTemplate>
  );
};
