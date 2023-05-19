import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";
import { baseTheme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div>
        <Navbar></Navbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
