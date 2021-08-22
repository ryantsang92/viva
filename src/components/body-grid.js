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
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  contentPanel: {
    padding: "0 !important",
    zIndex: 3,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  contentPanelMobile: {
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
  mobilePagesPanel: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#ffffff",
    zIndex: 9,
    overflow: "scroll",
  },
}));

const BodyGrid = ({
  selectedLocation,
  selectedMetro,
  refresh,
  fetchVideosMobile,
  fetchLocationsMobile,
  imagePanelOpen,
  videoPanelOpen,
  isMobile,
}) => {
  const classes = useStyles();

  const { locationId } = useParams();

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
            {imagePanelOpen && !isMobile && (
              <ContentPanelContainer
                className={classes.placeContentPanel}
                imagePanelOpen={imagePanelOpen}
                isMobile={isMobile}
                refresh={refresh}
              />
            )}
            {videoPanelOpen && !isMobile && (
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

        {selectedLocation && !isMobile && (
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
      {selectedLocation && isMobile && (
        <>
          <Grid className={classes.mobilePagesPanel}>
            <PlacesPanelContainer
              selectedLocation={selectedLocation}
              isMobile={isMobile}
              route={locationId}
            />
          </Grid>
          {imagePanelOpen && (
            <Grid className={classes.mobilePagesPanel}>
              <ContentPanelContainer
                className={classes.mobilePlaceContentPanel}
                imagePanelOpen={imagePanelOpen}
                isMobile={isMobile}
                refresh={refresh}
              />
            </Grid>
          )}
          {videoPanelOpen && (
            <Grid className={classes.mobilePagesPanel}>
              <ContentPanelContainer
                className={classes.mobilePlaceContentPanel}
                videoPanelOpen={videoPanelOpen}
                isMobile={isMobile}
                refresh={refresh}
              />
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};

BodyGrid.propTypes = {
  locations: PropTypes.array,
  selectedLocation: PropTypes.object,
  selectedMetro: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchVideosMobile: PropTypes.func,
  fetchLocationsMobile: PropTypes.func,
  imagePanelOpen: PropTypes.bool,
  videoPanelOpen: PropTypes.bool,
};

BodyGrid.defaultProps = {
  locations: null,
  selectedLocation: null,
  selectedMetro: null,
  isMobile: false,
  fetchVideosMobile() {},
  fetchLocationsMobile() {},
  imagePanelOpen: false,
  videoPanelOpen: false,
};

export default BodyGrid;
