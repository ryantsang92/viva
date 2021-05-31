/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MapPinDefault from "../../assets/map-pin-default.png";
import MapPinSelected from "../../assets/map-pin-selected.png";
import { apiKeys } from "../../app-constants";
import { Map as GoogleMap, Marker, GoogleApiWrapper } from "google-maps-react";
import Loading from "../common/loading";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const { clientSideKey } = apiKeys;

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

const loading = (props) => (
  <div
    style={{
      width: 400,
      height: 300,
    }}
  >
    <Loading />
  </div>
);

const Map = ({
  google,
  locations,
  selectedLocation,
  selectedCity,
  saveSelectedLocation,
  activateFilter,
  clearSelectedHashtag,
}) => {
  const classes = useStyles();

  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (selectedCity) {
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
      setCenter({
        lat: parseFloat(selectedLocation.lat),
        lng: parseFloat(selectedLocation.lng),
      });
      if (zoom < 15) {
        setZoom(15);
      }
    }
  }, [selectedLocation, selectedCity, zoom]);

  const onMarkerClick = (marker) => {
    saveSelectedLocation(marker.markerData);
    activateFilter();
    clearSelectedHashtag();
  };

  const mapStyle = [
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.government",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.medical",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.place_of_worship",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.school",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
  ];

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  return (
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
        resetBoundsOnResize
        center={center}
        initialCenter={center}
        zoomControlOptions={{
          position: google.maps.ControlPosition.TOP_RIGHT,
        }}
        onReady={(mapProps, map) => mapLoaded(mapProps, map)}
      >
        {locations?.map((location) => {
          const { id, lat, lng } = location;

          return (
            <Marker
              className={classes.marker}
              name={id}
              key={id}
              markerData={location}
              position={{
                lat: parseFloat(lat),
                lng: parseFloat(lng),
              }}
              onClick={onMarkerClick}
              icon={{
                url:
                  selectedLocation?.id === id ? MapPinSelected : MapPinDefault,
                scaledSize: new google.maps.Size(30, 36),
              }}
            />
          );
        })}
      </GoogleMap>
    </Box>
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
  clearSelectedHashtag: PropTypes.func,
};

Map.defaultProps = {
  loading: false,
  google: {},
  locations: null,
  selectedLocation: null,
  selectedCity: null,
  saveSelectedLocation() {},
  activateFilter() {},
  clearSelectedHashtag() {},
};

export default GoogleApiWrapper({
  apiKey: clientSideKey,
  LoadingContainer: loading,
})(Map);
