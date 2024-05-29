import { Card, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const ResultBox = () => {
  const searchStore = useSelector((state) => state.searchResult);

  return (
    <>
      <h3>Resultado:</h3>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem",
        }}
      >
        <div style={{ textWrap: "wrap", overflowX: "auto" }}>
          <p>{searchStore.result}</p>
        </div>
      </Card>
    </>
  );
};
