/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider, IconButton } from "@material-ui/core";
import HorizontalScrollMenu from "../common/horizontal-scroll-menu";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { apiKeys } from "../../app-constants";

const { clientSideKey } = apiKeys;

const useStyles = makeStyles({
  placePanel: {
    width: 300,
    height: "calc(100vh - 116px)",
    overflow: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
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
      fetchPlaceData(selectedLocation.g_place_id);
    }
  }, [selectedLocation]);

  const handlePanelClose = () => {
    clearSelectedLocation();
  };

  // const {
  //   name,
  //   photos,
  //   types
  // } = placeData?.result;

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
            <Box justifyContent="center" pt={1}>
              <h5>
                <Typography align="center">{placeData.result.name}</Typography>
              </h5>
            </Box>
          </Box>
          <Box pl={1} pr={1}>
            {/* <HorizontalScrollMenu
              data={(placeData.result.photos || []).map((photo) => {
                console.log(photo);
                return (
                  <Box key={photo.photo_reference}>
                    <img
                      src={
                        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
                        photo.photo_reference +
                        "&key=" +
                        clientSideKey
                      }
                      alt={placeData.result.name}
                    />
                  </Box>
                );
              })}
              isMobile={isMobile}
            /> */}
            <Box
              key={placeData.result.photos[0].photo_reference}
              overflow="hidden"
            >
              <img
                src={
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
                  placeData.result.photos[0].photo_reference +
                  "&key=" +
                  clientSideKey
                }
                alt={placeData.result.name}
              />
            </Box>
            <h6>
              <Typography>{placeData.result.name}</Typography>
            </h6>
            <Typography>{placeData.result.formatted_address}</Typography>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
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
