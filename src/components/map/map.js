/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import {
  Map as GoogleMap,
  Marker,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  infoWindow: {
    textAlign: "left",
  },
});

const initialCenter = {
  lat: 42.3601,
  lng: -71.0589,
};

const mapStyle = {
  float: "left",
  width: "100%",
  height: 550, // figure out why it breaks when we remove this or set it to 100%?
  position: "relative",
};

const mapContainerStyle = {
  float: "left",
  width: "100%",
  // height: "100%",
  position: "relative",
};

const Map = ({
  loaded,
  google,
  locations,
  selectedLocation,
  fetchLocations,
  saveSelectedLocation,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(13);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (!locations || !locations.length) {
      fetchLocations();
    }
    if (selectedLocation) {
      setInfoOpen(true);
      setCenter({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      if (zoom < 15) {
        setZoom(15);
      }
    }
  }, [locations, selectedLocation]);

  const onMarkerClick = (marker) => {
    saveSelectedLocation(marker.markerData);
  };

  const onInfoWindowClose = () => {
    setInfoOpen(false);
    setZoom(13);
    clearSelectedLocation();
  };

  return (
    <GoogleMap
      google={google}
      zoom={zoom}
      containerStyle={mapContainerStyle}
      style={mapStyle}
      resetBoundsOnResize={true}
      center={center}
      initialCenter={center}
    >
      {locations.map((location) => {
        return (
          <Marker
            name={location.id}
            key={location.id}
            markerData={location}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={onMarkerClick}
          />
        );
      })}
      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          visible={infoOpen}
          onClose={onInfoWindowClose}
        >
          <Box className={classes.infoWindow}>
            <h6>{selectedLocation.name}</h6>
            <Typography fontFamily="Arial">
              {selectedLocation.address_full}
            </Typography>
            <Typography>
              <a
                href={selectedLocation.website}
                target={selectedLocation.website}
              >
                {selectedLocation.website}
              </a>
            </Typography>
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

Map.propTypes = {
  google: PropTypes.object,
  locations: PropTypes.array,
  selectedLocation: PropTypes.object,
  fetchLocations: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
};

Map.defaultProps = {
  google: {},
  locations: [],
  selectedLocation: null,
  fetchLocations() {},
  saveSelectedLocation() {},
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(Map);
