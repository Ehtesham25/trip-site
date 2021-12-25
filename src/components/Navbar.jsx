import React from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link, useLocation, useHistory } from "react-router-dom";

import memories from "../images/test.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <div className={classes.brandContainer}>
          <Link to="/" className={classes.heading}>
            Trip-Site
          </Link>
          <img
            className={classes.img}
            src={memories}
            alt={memories}
            height="80"
          />
          <div className={classes.toolbar}>
            <Link to="/" className={classes.trip_text}>
              All Trips
            </Link>
            <Link to="/addNew" className={classes.trip_text}>
              Add new Trip
            </Link>
            <Link to="/editTrip" className={classes.trip_text}>
              Edit Trip
            </Link>
          </div>
        </div>
      </AppBar>
    </>
  );
};
export default Navbar;
