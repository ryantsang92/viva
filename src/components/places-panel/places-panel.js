/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import HorizontalScrollMenu from "../common/horizontal-scroll-menu";
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
  isMobile,
  fetchPlaceData,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (selectedLocation) {
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

  // const images =
  //   (placeData.result.photos || []).map((photo) => {
  //     return (
  //       <img
  //         src={
  //           "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
  //           photo.photo_reference +
  //           "&key=" +
  //           clientSideKey
  //         }
  //         alt={placeData.result.name}
  //       />
  //     );
  //   });

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
          <Box pl={1} pr={1}>
            <HorizontalScrollMenu
              data={(placeData.result.photos || []).map((photo) => {
                return (
                  <img
                    src={
                      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
                      photo.photo_reference +
                      "&key=" +
                      clientSideKey
                    }
                    alt={placeData.result.name}
                  />
                );
              })}
              isMobile={isMobile}
            />
            <h6>
              <Typography>{placeData.result.name}</Typography>
            </h6>
            <Typography>{placeData.result.formatted_address}</Typography>
            {placeData.result.opening_hours.weekday_text.map((day) => {
              return <Typography>{day}</Typography>;
            })}
          </Box>
        </div>
      )}
    </>
  );
};

PlacesPanel.propTypes = {
  selectedLocation: PropTypes.object,
  placeData: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchPlaceData: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
};

PlacesPanel.defaultProps = {
  selectedLocation: {},
  placeData: {},
  isMobile: false,
  fetchPlaceData() {},
  clearSelectedLocation() {},
};

export default PlacesPanel;
