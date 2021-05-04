/*
  Body Grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { videoSubmissionLink } from "../app-constants";
import GreenButton from "./common/green-button";
import ContentPanelContainer from "./content-panel/content-panel-container";
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

const BodyGrid = ({ locations, fetchLocations, isMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!locations) {
      fetchLocations();
    }
  }, [locations]);

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
          <>
            <Grid item xs className={classes.mapContainer}>
              <MapContainer locations={locations} />
            </Grid>
            <div className={classes.shareYourExperienceButton}>
              <GreenButton
                buttonText="Share Your Experience"
                href={videoSubmissionLink}
              />
            </div>
          </>
        )}
      </Grid>
    </Box>
  );
};

BodyGrid.propTypes = {
  locations: PropTypes.array,
  isMobile: PropTypes.bool,
  fetchLocations: PropTypes.func,
};

BodyGrid.defaultProps = {
  locations: null,
  isMobile: false,
  fetchLocations() {},
};

export default BodyGrid;
