/*
  Body Grid component (let's think of a better name for this)

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import ContentPanelContainer from "./content-panel/content-panel-container";
import MapContainer from "./map/map-container";
import VideoPanelContainer from "./video-player-panel/video-player-panel-container";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    marginLeft: 0,
  },
  contentPanel: {
    position: "relative",
    maxWidth: 500,
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  contentPanelMobile: {
    position: "relative",
    maxWidth: "100%",
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  videoPanel: {
    minWidth: 310,
    maxWidth: 310,
    height: "calc(100vh - 116px)",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
    scrollbarWidth: "none",
    zIndex: 2,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  videoPanelMobile: {
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    top: 20,
    left: 0,
    bottom: 0,
    position: "fixed",
    scrollbarWidth: "none",
    zIndex: 400,
    backgroundColor: "white",
    boxShadow: "-1px 1px 5px rgba(0,0,0,0.6)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  grid: {
    width: "100%",
    height: "100%",
    margin: 0,
  },
  mapContainer: {
    zIndex: 1,
  },
});

const BodyGrid = ({ selectedVideo, locations, fetchLocations }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!locations) {
      fetchLocations();
    }
  }, [locations]);

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
    <Box ml={1} className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid
          item
          className={
            isMobile ? classes.contentPanelMobile : classes.contentPanel
          }
        >
          <ContentPanelContainer />
        </Grid>
        {selectedVideo && (
          <Grid
            item
            className={isMobile ? classes.videoPanelMobile : classes.videoPanel}
          >
            <VideoPanelContainer video={selectedVideo} />
          </Grid>
        )}
        {!isMobile && (
          <Grid item xs className={classes.mapContainer}>
            <MapContainer locations={locations} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

BodyGrid.propTypes = {
  selectedVideo: PropTypes.object,
  locations: PropTypes.array,
  fetchLocations: PropTypes.func,
};

BodyGrid.defaultProps = {
  selectedVideo: null,
  locations: null,
  fetchLocations() {},
};

export default BodyGrid;
