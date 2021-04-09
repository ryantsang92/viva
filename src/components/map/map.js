/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Button } from "@material-ui/core";
import MapPinDefault from "../../assets/map-pin-default.png";
import MapPinSelected from "../../assets/map-pin-selected.png";
import {
  Map as GoogleMap,
  Marker,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";
import Loading from "../loading";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  infoWindow: {
    textAlign: "left",
  },
  marker: {
    height: 24,
    width: 24,
  },
  test: {
    height: "calc(100vh - 140px)",
    marginRight: 0,
  },
});

const initialCenter = {
  lat: 42.3601,
  lng: -71.0589,
};

const mapStyle = {
  float: "left",
  width: "100%",
  height: "100%",
  position: "relative",
};

const mapContainerStyle = {
  float: "left",
  width: "100%",
  position: "relative",
};

const Map = ({
  loading,
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
      setInfoOpen(false);
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

  const onRelatedVideosClick = (e) => {
    e.preventDefault();
    console.log("onRelatedVideosClick");
  };

  // let ref;

  // console.log(ref);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box mr={2} className={classes.test}>
          <GoogleMap
            // ref={(mapRef) => (ref = mapRef)}
            google={google}
            zoom={zoom}
            mapTypeControl={false}
            scaleControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            zoomControl
            containerStyle={mapContainerStyle}
            style={mapStyle}
            resetBoundsOnResize={true}
            center={center}
            initialCenter={center}
            // onCenterChanged={() => {
            //   ref.getCenter(); // get the center, zoom, whatever using the ref
            // }}
          >
            {locations.map((location) => {
              return (
                <Marker
                  className={classes.marker}
                  name={location.id}
                  key={location.id}
                  markerData={location}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={onMarkerClick}
                  icon={{
                    url:
                      selectedLocation && selectedLocation.id === location.id
                        ? MapPinSelected
                        : MapPinDefault,
                    scaledSize: new google.maps.Size(36, 36),
                  }}
                />
              );
            })}
            {selectedLocation && (
              <InfoWindow
                position={{
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                }}
                visible={infoOpen}
                onClose={onInfoWindowClose}
                pixelOffset={new google.maps.Size(0, -35)}
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
                  <Box pt={1} pb={1}>
                    <Divider />
                  </Box>
                  <Typography>
                    {/* <a href="#" onClick={onRelatedVideosClick}> */}
                    <a href="#">See related videos</a>
                  </Typography>
                </Box>
              </InfoWindow>
            )}
          </GoogleMap>
        </Box>
      )}
    </>
  );
};

Map.propTypes = {
  loading: PropTypes.bool,
  google: PropTypes.object,
  locations: PropTypes.array,
  selectedLocation: PropTypes.object,
  fetchLocations: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
};

Map.defaultProps = {
  loading: false,
  google: {},
  locations: [],
  selectedLocation: null,
  fetchLocations() {},
  saveSelectedLocation() {},
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(Map);
