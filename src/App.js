/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography, Button } from "@material-ui/core";
import HeaderContainer from "./components/header-container";
import BodyGridContainer from "./components/body-grid-container";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: 25,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
}));

const ThemeButton = withStyles({
  root: {
    backgroundColor: "#228B6E",
    "&:hover": {
      backgroundColor: "#228b8b",
    },
  },
})(Button);

const App = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <>
      <div className="App">
        <HeaderContainer />
        <BodyGridContainer />
        {!isMobile && (
          <Typography className={classes.margin}>
            <ThemeButton
              variant="contained"
              color="primary"
              // onClick={onAboutClick}
            >
              Share Your Experience
            </ThemeButton>
          </Typography>
        )}
      </div>
    </>
  );
};

export default App;
