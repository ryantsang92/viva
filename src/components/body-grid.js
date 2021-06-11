/*
  Body Grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import ContentPanelContainer from "./content-panel/content-panel-container";
import PlacesPanelContainer from "./places-panel/places-panel-container";
import MapContainer from "./map/map-container";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  contentPanel: {
    position: "relative",
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  contentPanelMobile: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  grid: {
    width: "100%",
    height: "100%",
    margin: 0,
  },
  mapContainer: {
    zIndex: 1,
  },
  shareYourExperienceButton: {
    margin: theme.spacing(1),
    borderRadius: 25,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
}));

const BodyGrid = ({
  selectedLocation,
  refresh,
  mapBounds,
  fetchLocationsV2,
  fetchVideosV2,
  clearRefresh,
  isMobile,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (refresh && mapBounds) {
      const { latMin, latMax, lngMin, lngMax } = mapBounds;
      fetchLocationsV2(latMin, latMax, lngMin, lngMax);
      fetchVideosV2(latMin, latMax, lngMin, lngMax);
      clearRefresh();
    }
  }, [refresh, mapBounds, fetchLocationsV2, fetchVideosV2, clearRefresh]);

  return (
    <Box className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid
          item
          className={
            isMobile ? classes.contentPanelMobile : classes.contentPanel
          }
        >
          <ContentPanelContainer isMobile={isMobile} />
        </Grid>
        {!isMobile && (
          <Grid item xs className={classes.mapContainer}>
            <MapContainer />
          </Grid>
        )}
        {selectedLocation && (
          <Grid
            item
            className={
              isMobile ? classes.contentPanelMobile : classes.contentPanel
            }
          >
            <PlacesPanelContainer
              selectedLocation={selectedLocation}
              isMobile={isMobile}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

BodyGrid.propTypes = {
  locations: PropTypes.array,
  selectedLocation: PropTypes.object,
  mapBounds: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchLocationsV2: PropTypes.func,
};

BodyGrid.defaultProps = {
  locations: null,
  selectedLocation: null,
  mapBounds: null,
  isMobile: false,
  fetchLocationsV2() {},
};

export default BodyGrid;
