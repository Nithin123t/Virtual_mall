import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/games">Games</Button>
        <Button color="inherit" component={Link} to="/movies">Movies</Button>
        <Button color="inherit" component={Link} to="/shops">Shops</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
