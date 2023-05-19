import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffcc80",
    },
    secondary: {
      main: "#757575",
    },
    success: {
      main: "#880e4f",
    },
    error: {
      main: "#424242",
    },
    background: {
      default: "#424242",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffcc80",
    },
    secondary: {
      main: "#757575",
    },
    success: {
      main: "#880e4f",
    },
    error: {
      main: "#424242",
    },
    background: {
      default: "#424242",
    },
  },
});
