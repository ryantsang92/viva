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
import GreenButton from "../common/green-button";

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
    position: "relative",
    height: "calc(100vh - 116px)",
    marginRight: 0,
    textAlign: "center",
  },
  refreshButton: {
    position: "absolute",
    top: 10,
    display: "inline-block",
    zIndex: 500,
    left: "calc(50% - 45px)",
  },
});

const initialCenter = {
  lat: 42.3601,
  lng: -71.0589,
};

const dummyCenter = {
  lat: 43.0,
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
  clearSelectedCategory,
  saveMapBounds,
  setRefresh,
}) => {
  const classes = useStyles();

  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState(dummyCenter);
  const [zoom, setZoom] = useState(13);
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      setCenter({
        lat: selectedCity.lat,
        lng: selectedCity.lng,
      });
      setZoom(13);
    }
    if (selectedLocation) {
      setCenter({
        lat: parseFloat(selectedLocation.lat),
        lng: parseFloat(selectedLocation.lng),
      });
    }
  }, [selectedLocation, selectedCity]);

  const onMarkerClick = (marker) => {
    saveSelectedLocation(marker.markerData);
    clearSelectedCategory();
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
    setCenter(initialCenter);
    map.setOptions({
      styles: mapStyle,
    });
  };

  const getAndSaveBounds = (map) => {
    const latMin = map?.getBounds()?.getSouthWest()?.lat();
    const latMax = map?.getBounds()?.getNorthEast()?.lat();
    const lngMin = map?.getBounds()?.getSouthWest()?.lng();
    const lngMax = map?.getBounds()?.getNorthEast()?.lng();

    if (
      latMin !== null &&
      latMax !== null &&
      lngMin !== null &&
      lngMax !== null
    ) {
      saveMapBounds({
        latMin: latMin,
        latMax: latMax,
        lngMin: lngMin,
        lngMax: lngMax,
      });
    }
  };

  const onMapChange = (mapProps, map) => {
    setMapRef(map);
    getAndSaveBounds(map);
    setShowRefresh(true);
  };

  const onRefreshButtonClick = () => {
    getAndSaveBounds(mapRef);
    setRefresh();
    setShowRefresh(false);
  };

  return (
    <Box mr={2} className={classes.test}>
      {showRefresh && (
        <div className={classes.refreshButton}>
          <GreenButton
            buttonText="Refresh"
            onClick={() => onRefreshButtonClick()}
          />
        </div>
      )}
      <GoogleMap
        google={google}
        onBoundsChanged={onMapChange}
        onZoomChanged={onMapChange}
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
        onReady={mapLoaded}
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
  google: PropTypes.object,
  locations: PropTypes.array,
  selectedLocation: PropTypes.object,
  selectedCity: PropTypes.object,
  saveSelectedLocation: PropTypes.func,
  clearSelectedCategory: PropTypes.func,
  saveMapBounds: PropTypes.func,
  setRefresh: PropTypes.func,
};

Map.defaultProps = {
  google: {},
  locations: null,
  selectedLocation: null,
  selectedCity: null,
  saveSelectedLocation() {},
  clearSelectedCategory() {},
  saveMapBounds() {},
  setRefresh() {},
};

export default GoogleApiWrapper({
  apiKey: clientSideKey,
  LoadingContainer: loading,
})(Map);
