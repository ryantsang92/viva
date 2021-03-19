/*
  Body Grid Component (let's think of a better name for this)

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Grid } from "@material-ui/core";
import ContentPanel from "./content-panel";
import MapContainer from "./map-container";
import VideoPanel from "./video-panel";
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

const BodyGrid = ({ selectedVideo }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container spacing={2}>
      <Grid item className={classes.contentPanel}>
        <ContentPanel />
      </Grid>
      <Grid item xs>
        <MapContainer />
      </Grid>
      {selectedVideo && (
        <Grid item className={classes.videoPanel}>
          <VideoPanel video={selectedVideo} />
        </Grid>
      )}
    </Grid>
  );
};

export default BodyGrid;
