import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F5CA50",
    },
    secondary: {
      main: "#BE931B",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
