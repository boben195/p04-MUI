import "@fontsource/roboto";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@mui/material";
import Hero from "./components/Hero/Hero.jsx";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
