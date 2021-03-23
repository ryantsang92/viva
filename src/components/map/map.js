/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import { Map as GoogleMap, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

const center = {
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

const Map = ({ loaded, google, locations, fetchLocations }) => {
  useEffect(() => {
    if (!locations || !locations.length) {
      fetchLocations();
    }
  });

  return (
    <>
      <Box border={1}>
        <Card>
          <CardContent>
            <GoogleMap
              google={google}
              zoom={13}
              containerStyle={mapContainerStyle}
              style={mapStyle}
              resetBoundsOnResize={true}
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
          </CardContent>
        </Card>
      </Box>
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
