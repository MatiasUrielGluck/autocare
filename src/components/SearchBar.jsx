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

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const inputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const callOpenAi = async () => {
    await openai_test();
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
            onChange={(e) => inputChange(e)}
            value={searchQuery}
            id="outlined-textarea"
            label="Buscar"
            placeholder="Realice una consulta"
            multiline
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchQuery("")}>
                    {searchQuery ? <Close /> : <Icon />}
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
          onClick={callOpenAi}
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
