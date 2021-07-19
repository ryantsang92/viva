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
    // position: "relative",
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  contentPanelMobile: {
    // position: "relative",
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
  placeContentPanel: {
    position: "absolute",
    backgroundColor: "white",
    zIndex: 4,
  },
}));

const BodyGrid = ({
  selectedLocation,
  selectedMetro,
  refresh,
  mapBounds,
  fetchLocationsV2,
  fetchVideosV2,
  clearRefresh,
  fetchVideosMobile,
  fetchLocationsMobile,
  imagePanelOpen,
  videoPanelOpen,
  isMobile,
}) => {
  const classes = useStyles();

  // useEffect(() => {
  //   if (refresh && mapBounds && !isMobile) {
  //     const { latMin, latMax, lngMin, lngMax } = mapBounds;
  //     fetchLocationsV2(latMin, latMax, lngMin, lngMax);
  //     fetchVideosV2(latMin, latMax, lngMin, lngMax);
  //     clearRefresh();
  //   }
  // }, [
  //   refresh,
  //   mapBounds,
  //   fetchLocationsV2,
  //   fetchVideosV2,
  //   clearRefresh,
  //   isMobile,
  // ]);

  useEffect(() => {
    if (isMobile && selectedMetro) {
      fetchVideosMobile(selectedMetro?.id);
      fetchLocationsMobile(selectedMetro?.id);
    }
  }, [fetchVideosMobile, fetchLocationsMobile, selectedMetro, isMobile]);

  return (
    <Box className={classes.root}>
      <Grid className={classes.grid} container>
        {(imagePanelOpen || videoPanelOpen) && (
          <Grid item className={classes.placeContentPanel}>
            {imagePanelOpen && (
              <ContentPanelContainer
                className={classes.placeContentPanel}
                imagePanelOpen={imagePanelOpen}
                isMobile={isMobile}
                refresh={refresh}
              />
            )}
            {videoPanelOpen && (
              <ContentPanelContainer
                className={classes.placeContentPanel}
                videoPanelOpen={videoPanelOpen}
                isMobile={isMobile}
                refresh={refresh}
              />
            )}
          </Grid>
        )}
        <Grid
          item
          className={
            isMobile ? classes.contentPanelMobile : classes.contentPanel
          }
        >
          <ContentPanelContainer isMobile={isMobile} refresh={refresh} />
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
  selectedMetro: PropTypes.object,
  mapBounds: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchLocationsV2: PropTypes.func,
  fetchVideosMobile: PropTypes.func,
  fetchLocationsMobile: PropTypes.func,
  imagePanelOpen: PropTypes.bool,
  videoPanelOpen: PropTypes.bool,
};

BodyGrid.defaultProps = {
  locations: null,
  selectedLocation: null,
  selectedMetro: null,
  mapBounds: null,
  isMobile: false,
  fetchLocationsV2() {},
  fetchVideosMobile() {},
  fetchLocationsMobile() {},
  imagePanelOpen: false,
  videoPanelOpen: false,
};

export default BodyGrid;
