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

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Grid container spacing={2}>
          <Grid item>
            <ContentPanel />
          </Grid>
          <Grid item>
            <MapContainer />
          </Grid>
          <Grid item>
            <VideoPanel />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default App;
