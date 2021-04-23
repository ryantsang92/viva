/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import MapPinDefault from "../../assets/map-pin-default.png";
import MapPinSelected from "../../assets/map-pin-selected.png";
import { Map as GoogleMap, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./info-window-ex";
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
    height: "calc(100vh - 116px)",
    marginRight: 0,
  },
});

const initialCenter = {
  lat: 42.3601,
  lng: -71.0589,
};

const style = {
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
  selectedCity,
  saveSelectedLocation,
  clearSelectedLocation,
  activateFilter,
  deactivateFilter,
  clearSelectedHashtag,
  clearSelectedVideo,
}) => {
  const classes = useStyles();

  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(13);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      setInfoOpen(false);
      setCenter(
        selectedCity === "Boston"
          ? {
              lat: 42.3601,
              lng: -71.0589,
            }
          : { lat: 40.7128, lng: -74.006 }
      );
      setZoom(13);
    }
    if (selectedLocation) {
      setInfoOpen(true);
      setCenter({
        lat: parseFloat(selectedLocation.lat),
        lng: parseFloat(selectedLocation.lng),
      });
      if (zoom < 15) {
        setZoom(15);
      }
    }
    // }, [locations, selectedLocation, selectedCity]);
  }, [selectedLocation, selectedCity]);

  const onMarkerClick = (marker) => {
    saveSelectedLocation(marker.markerData);
    deactivateFilter();
  };

  const onInfoWindowClose = () => {
    setInfoOpen(false);
    setZoom(13);
    clearSelectedLocation();
    clearSelectedVideo();
  };

  const onRelatedVideosClick = (e) => {
    e.preventDefault();
    clearSelectedHashtag();
    activateFilter();
  };

  const mapStyle = [
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.government",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.medical",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.place_of_worship",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.school",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    }
  ]

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box mr={2} className={classes.test}>
          <GoogleMap
            google={google}
            zoom={zoom}
            mapTypeControl={false}
            scaleControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            zoomControl
            containerStyle={mapContainerStyle}
            style={style}
            resetBoundsOnResize={true}
            center={center}
            initialCenter={center}
            zoomControlOptions={{
              position: google.maps.ControlPosition.TOP_RIGHT,
            }}
            onReady={(mapProps, map) => mapLoaded(mapProps, map)}
          >
            {locations &&
              locations.map((location) => {
                return (
                  <Marker
                    className={classes.marker}
                    name={location.id}
                    key={location.id}
                    markerData={location}
                    position={{
                      lat: parseFloat(location.lat),
                      lng: parseFloat(location.lng),
                    }}
                    onClick={onMarkerClick}
                    icon={{
                      url:
                        selectedLocation && selectedLocation.id === location.id
                          ? MapPinSelected
                          : MapPinDefault,
                      scaledSize: new google.maps.Size(30, 36),
                    }}
                  />
                );
              })}
            {selectedLocation && (
              <InfoWindowEx
                position={{
                  lat: parseFloat(selectedLocation.lat),
                  lng: parseFloat(selectedLocation.lng),
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
                      {
                        selectedLocation.website
                          .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                          .split("/")[0]
                      }
                    </a>
                  </Typography>
                  <Box pt={1} pb={1}>
                    <Divider />
                  </Box>
                  <Typography>
                    <a href="/#" onClick={onRelatedVideosClick}>
                      See related videos
                    </a>
                  </Typography>
                </Box>
              </InfoWindowEx>
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
  selectedCity: PropTypes.string,
  saveSelectedLocation: PropTypes.func,
  activateFilter: PropTypes.func,
  deactivateFilter: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
  clearSelectedHashtag: PropTypes.func,
  clearSelectedVideo: PropTypes.func,
};

Map.defaultProps = {
  loading: false,
  google: {},
  locations: null,
  selectedLocation: null,
  selectedCity: null,
  saveSelectedLocation() {},
  activateFilter() {},
  deactivateFilter() {},
  clearSelectedLocation() {},
  clearSelectedHashtag() {},
  clearSelectedVideo() {},
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
  // LoadingContainer: <Loading />,
})(Map);
