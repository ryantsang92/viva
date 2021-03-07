/*
  Mock Data

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const center = {
  lat: 42.3601,
  lng: -71.0589,
};

// to-do: fix map styling and positioning
const mapStyles = {
  float: "left",
  width: 1200,
  height: 550,
};

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minHeight: 550,
  },
});

const MapContainer = ({ loaded, google, places }) => {
  const classes = useStyles();
  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <Box className={classes.root}>
          <Map
            google={google}
            zoom={13}
            containerStyle={mapStyles}
            style={mapStyles}
            initialCenter={center}
          >
            {places.map((place) => {
              return (
                <Marker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                />
              );
            })}
          </Map>
        </Box>
      )}
    </>
  );
};

MapContainer.propTypes = {
  google: PropTypes.object,
  places: PropTypes.array,
};

MapContainer.defaultProps = {
  google: {},
  places: [],
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(MapContainer);
