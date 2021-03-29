/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Card, CardContent, Box, Typography } from "@material-ui/core";
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

const roundedCornersStyle = {
  borderRadius: "15px",
};

const Map = ({ loaded, google, locations, fetchLocations }) => {
  const classes = useStyles();

  const [selectedLocation, setSelectedLocation] = useState({});
  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(13);
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});

  useEffect(() => {
    if (!locations || !locations.length) {
      fetchLocations();
    }
  });

  const onMarkerClick = (marker) => {
    if (zoom < 15) {
      setZoom(15);
    }
    setCenter(marker.position);
    setSelectedMarker(marker);
    setSelectedLocation(marker.markerData);
    setInfoOpen(true);
  };

  //throws CORS error when referenced
  // const onInfoWindowClose = () => {
  //   console.log("onInfoWindowClose");
  //   setSelectedMarker(null);
  //   setInfoOpen(false);
  // };

  return (
    <>
      <Box border={1} style={roundedCornersStyle}>
        <Card style={roundedCornersStyle}>
          <CardContent>
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
              <InfoWindow
                position={selectedMarker.position}
                visible={infoOpen}
                // onClose={onInfoWindowClose}
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
            </GoogleMap>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

Map.propTypes = {
  google: PropTypes.object,
  locations: PropTypes.array,
  fetchLocations: PropTypes.func,
};

Map.defaultProps = {
  google: {},
  locations: [],
  fetchLocations() {},
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(Map);
