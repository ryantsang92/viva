/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const PlacesPanel = ({ selectedLocation, placeData, fetchPlaceData }) => {
  useEffect(() => {
    console.log(selectedLocation.g_place_id);
    fetchPlaceData(selectedLocation.g_place_id);
  }, [selectedLocation]);

  console.log(placeData);
  return (
    <>
      <Typography>{placeData.result.name}</Typography>
      {/* <img src={placeData.result.photos[0]} alt={placeData.result.name} /> */}
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
