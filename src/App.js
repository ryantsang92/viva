/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import "./App.css";
import "./VivaLogo.css";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import Footer from "./components/footer";
import ContentPanel from "./components/content-panel";
import MapContainer from "./components/map-container";
import VideoPanel from "./components/video-panel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contentPanel: {
    minWidth: 400,
    maxWidth: 400,
  },
  videoPanel: {
    minWidth: 400,
    maxWidth: 400,
  },
  grid: {
    width: "100%",
    height: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className="App">
        <Header />
        <Grid className={classes.grid} container spacing={2}>
          <Grid item className={classes.contentPanel}>
            <ContentPanel />
          </Grid>
          <Grid item xs>
            <MapContainer />
          </Grid>
          <Grid item className={classes.videoPanel}>
            <VideoPanel />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default App;
