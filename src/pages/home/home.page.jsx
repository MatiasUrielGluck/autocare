import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";

export const HomePage = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">search</InputLabel>
        <FilledInput
          id="outlined-adornment-search"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle search visibility"
                edge="end"
              ></IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  );
};
