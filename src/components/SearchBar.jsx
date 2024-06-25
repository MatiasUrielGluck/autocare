import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { openai_test } from "../helpers/openai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doQuery, setQuery } from "../store/searchResult/searchSlice";

export const SearchBar = ({ children, allowRouteBack }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchStore = useSelector((state) => state.searchResult);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    dispatch(setQuery(e));
  };

  const handleResult = () => {
    callOpenAi();

    if (allowRouteBack) {
      navigate("/result");
    }
  };

  const callOpenAi = async () => {
    dispatch(doQuery());
    // await openai_test();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          marginTop: 2,
        }}
      >
        <FormControl
          sx={{
            m: 1,
            width: "100%",
            margin: 0,
          }}
          variant="filled"
        >
          <TextField
            onChange={(e) => inputChange(e.target.value)}
            value={searchStore.query}
            id="outlined-textarea"
            label="Busqueda con IA"
            placeholder="Realice una consulta"
            multiline
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      inputChange("");
                    }}
                  >
                    {searchStore.query !== "" ? <Close /> : <Icon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button
          sx={{ borderRadius: 50 }}
          variant="contained"
          color="success"
          onClick={handleResult}
        >
          Buscar
        </Button>
      </Box>
      <Typography
        variant="p"
        fontSize={14}
        color="text.secondary"
        component="div"
      >
        Necesita conexion a internet para utilizar...
      </Typography>
    </Box>
  );
};
