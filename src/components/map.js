import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import PropTypes from 'prop-types';

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ isMarkerShown }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    // <GoogleMap
    //   mapContainerStyle={containerStyle}
    //   center={center}
    //   zoom={10}
    //   onLoad={onLoad}
    //   onUnmount={onUnmount}
    // />
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );
}

Map.propTypes = {
  isMarkerShown: PropTypes.bool,
};

Map.defaultProps = {
  isMarkerShown: false,
};

export default Map;
