import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import PropTypes from "prop-types";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({ isMarkerShown }) => {
  return (
    <GoogleMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );
};

Map.propTypes = {
  isMarkerShown: PropTypes.bool,
};

Map.defaultProps = {
  isMarkerShown: false,
};

export default withScriptjs(withGoogleMap(Map));
