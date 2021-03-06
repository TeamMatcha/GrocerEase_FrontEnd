import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Libre Franklin",
  },
  palette: {
    primary: {
      main: "#000",
      borderWidth: "1px",
      borderColor: "#000 !important",
    },
    special: {
      main: "#EEB61B",
    },
    invertSpecial: {
      main: "#FFF8F0",
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#000 !important",
    },
  },
});

export default theme;
