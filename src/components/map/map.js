/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import {
  Map as GoogleMap,
  Marker,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";
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

const roundedCornersStyle = {
  borderRadius: "15px"
};

const Map = ({ loaded, google, locations, fetchLocations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation);

  useEffect(() => {
    if (!locations || !locations.length) {
      fetchLocations();
    }
  });

  const onMarkerClick = (center) => {
    console.log("here");
    setSelectedLocation(center);
  };

  return (
    <>
      <Box
        border={1}
        style={roundedCornersStyle}
      >
        <Card style={roundedCornersStyle}>
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
                    onClick={() => onMarkerClick(location)}
                  >
                    {/* {selectedLocation && ( */}
                    <InfoWindow
                      visible
                      // onCloseClick={() => {
                      //   setSelectedLocation(null);
                      // }}
                      position={{
                        lat: location.lat,
                        lng: location.lng,
                      }}
                    >
                      <h4>test</h4>
                    </InfoWindow>
                    {/* )} */}
                  </Marker>
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
