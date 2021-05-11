/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { apiKeys } from "../../app-constants";

const { clientSideKey } = apiKeys;

const useStyles = makeStyles({
  placePanel: {
    width: 300,
  },
});

const PlacesPanel = ({
  selectedLocation,
  placeData,
  fetchPlaceData,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (selectedLocation) {
      console.log(selectedLocation.g_place_id);
      fetchPlaceData(selectedLocation.g_place_id);
    }
  }, [selectedLocation]);

  const handlePanelClose = () => {
    clearSelectedLocation();
  };

//   const {
//     name,
//     photos,
//     types
//   } = placeData?.result;

  return (
    <>
      {placeData.result && (
        <div className={classes.placePanel}>
          <Box display="flex">
            <IconButton onClick={handlePanelClose} size="small">
              <CloseIcon />
            </IconButton>
            <Box justifyContent="center">
              <Typography align="center">{placeData.result.name}</Typography>
            </Box>
          </Box>
          <img
            src={
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
              placeData.result.photos[0].photo_reference +
              "&key=" +
              clientSideKey
            }
            alt={placeData.result.name}
          />
          <Typography>{placeData.result.name}</Typography>
          {/* <Typography>{types[0]}</Typography> */}
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
