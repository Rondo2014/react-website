import React from "react";
import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Houses } from "./components/Houses";
import { baseTheme, lightTheme } from "./styles/styles";
import { Paper, CssBaseline } from "@mui/material";

function App() {
  const [theme, setTheme] = React.useState(baseTheme);

  const handleThemeToggle = () => {
    const newTheme = theme === baseTheme ? lightTheme : baseTheme;
    setTheme(newTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Navbar handleThemeToggle={handleThemeToggle}></Navbar>
        <Houses></Houses>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
