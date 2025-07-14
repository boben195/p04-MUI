import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CoffeeIcon from "@mui/icons-material/Coffee";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, fontFamily: "'Eagle Lake', serif" }}
            >
              Coffee Shop
            </Typography>
            <Button color="inherit" href="#home">
              Home
            </Button>
            <Button color="inherit" href="#coffee">
              Coffee
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
