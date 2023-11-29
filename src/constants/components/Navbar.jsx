import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" className="navbar">
      <CssBaseline />
      <Toolbar className='justify-content'>
        <Typography variant="h4" className="logo">
          Reeco
        </Typography>
          <div className="navlinks">
            <Link to="/" className="link">
              Store
            </Link>
            <Link to="/orders" className="link">
              Orders
            </Link>
            <Link to="/anaylytics" className="link">
              Analytics
            </Link>
          </div>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;