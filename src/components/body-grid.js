/*
  Body Grid Component (let's think of a better name for this)

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Grid, Box } from "@material-ui/core";
import ContentPanelContainer from "./content-panel/content-panel-container";
import MapContainer from "./map/map-container";
import VideoPanelContainer from "./video-player-panel/video-player-panel-container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contentPanel: {
    minWidth: 400,
    maxWidth: 400,
  },
  videoPanel: {
    minWidth: 500,
    maxWidth: 500,
    maxHeight: 500,
  },
  grid: {
    borderTop: "1px solid black",
    width: "100%",
    height: "100%",
  },
});

const BodyGrid = ({ selectedVideo }) => {
  console.log("selectedVideo");
  console.log(selectedVideo);
  const classes = useStyles();
  return (
    <Box ml={1}>
      <Grid className={classes.grid} container spacing={1}>
        <Grid item className={classes.contentPanel}>
          <ContentPanelContainer />
        </Grid>
        {selectedVideo && (
          <Grid item className={classes.videoPanel}>
            <VideoPanelContainer video={selectedVideo} />
          </Grid>
        )}
        <Grid item xs>
          <MapContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BodyGrid;
