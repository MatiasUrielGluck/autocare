import { Divider, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CategoriaButton = ({ categoria }) => {
  const navigate = useNavigate();

  const handleCategoriaToView = () => {
    navigate(`${categoria.id}`);
  };

  return (
    <>
      <ListItem
        onClick={() => {
          handleCategoriaToView();
        }}
      >
        <ListItemText primary={categoria.nombre} />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};
