/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Map as GoogleMap, Marker, GoogleApiWrapper } from "google-maps-react";
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
  width: 1250,
  height: 550,
};

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minHeight: 550,
  },
});

const Map = ({ loaded, google, locations, fetchLocations }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!locations || !locations.length) {
      fetchLocations();
    }
  });

  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <Box className={classes.root}>
          <GoogleMap
            google={google}
            zoom={13}
            // containerStyle={mapStyles}
            // style={mapStyles}
            initialCenter={center}
          >
            {locations.map((location) => {
              return (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                />
              );
            })}
          </GoogleMap>
        </Box>
      )}
    </>
  );
};

Map.propTypes = {
  google: PropTypes.object,
  locations: PropTypes.array,
};

Map.defaultProps = {
  google: {},
  locations: [],
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(Map);
