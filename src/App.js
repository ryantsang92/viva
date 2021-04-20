/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import { videoSubmissionLink } from "./app-constants";
import GreenButton from "./components/common/green-button";
import HeaderContainer from "./components/header-container";
import BodyGridContainer from "./components/body-grid-container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shareYourExperienceButton: {
    margin: theme.spacing(1),
    borderRadius: 25,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
}));

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
          <div className={classes.shareYourExperienceButton}>
            <GreenButton
              buttonText="Share Your Experience"
              href={videoSubmissionLink}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
