import "@fontsource/roboto";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@mui/material";
import Hero from "./components/Hero/Hero.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Coffee />
      </ThemeProvider>
    </>
  );
}

export default App;
