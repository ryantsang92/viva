/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    placePanel: {
      width: 300
    },
  });

const PlacesPanel = ({ selectedLocation, placeData, fetchPlaceData }) => {
    const classes = useStyles();

    useEffect(() => {
    if (selectedLocation) {
      console.log(selectedLocation.g_place_id);
      fetchPlaceData(selectedLocation.g_place_id);
    }
  }, [selectedLocation]);

  console.log(selectedLocation);
  console.log(placeData);
  return (
    <>
      {placeData.result && (
        <div className={classes.placePanel}>
          <Typography>{placeData.result.name}</Typography>
          <img src={placeData.result.photos[0]} alt={placeData.result.name} />
        </div>
      )}
    </>
  );
};

PlacesPanel.propTypes = {
  selectedLocation: PropTypes.object,
};

PlacesPanel.defaultProps = {
  selectedLocation: {},
};

export default PlacesPanel;
