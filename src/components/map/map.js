/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MapPinDefault from "../../assets/map-pin-default.png";
import MapPinBlue from "../../assets/map-pin-blue.png";
import MapPinOrange from "../../assets/map-pin-orange.png";
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
  selectedMetro,
  refresh,
  saveSelectedLocation,
  refreshEverything,
  saveMapBounds,
  mapBounds,
  clearRefresh,
  clearSelectedLocation,
  closePlaceImagePanel,
  closePlaceVideoPanel,
}) => {
  const classes = useStyles();

  const [center, setCenter] = useState({
    lat: selectedMetro.lat,
    lng: selectedMetro.lng,
  });
  const [zoom, setZoom] = useState(13);
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    if (selectedMetro) {
      saveMapBounds({
        latMin: selectedMetro.latMin,
        latMax: selectedMetro.latMax,
        lngMin: selectedMetro.lngMin,
        lngMax: selectedMetro.lngMax,
      });
      setCenter({
        lat: selectedMetro.lat,
        lng: selectedMetro.lng,
      });
      setZoom(13);
    }
    if (selectedLocation) {
      setCenter({
        lat: parseFloat(selectedLocation.lat),
        lng: parseFloat(selectedLocation.lng),
      });
    }
  }, [selectedLocation, selectedMetro, saveMapBounds]);

  useEffect(() => {
    if (refresh && selectedMetro) {
      refreshEverything({
        latMin: selectedMetro.latMin,
        latMax: selectedMetro.latMax,
        lngMin: selectedMetro.lngMin,
        lngMax: selectedMetro.lngMax,
      });
      clearRefresh();
    }
  }, [refresh, selectedMetro, refreshEverything, clearRefresh]);

  const onMarkerClick = (marker) => {
    saveSelectedLocation(marker.markerData);
  };

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  const getAndSaveBounds = (map) => {
    const latMin = map?.getBounds()?.getSouthWest()?.lat();
    const latMax = map?.getBounds()?.getNorthEast()?.lat();
    const lngMin = map?.getBounds()?.getSouthWest()?.lng();
    const lngMax = map?.getBounds()?.getNorthEast()?.lng();

    saveMapBounds({
      latMin: latMin,
      latMax: latMax,
      lngMin: lngMin,
      lngMax: lngMax,
    });
  };

  const onMapChange = (mapProps, map) => {
    getAndSaveBounds(map);
    setShowRefresh(true);
  };

  const onRefreshButtonClick = () => {
    clearSelectedLocation();
    closePlaceImagePanel();
    closePlaceVideoPanel();
    refreshEverything(mapBounds);
    setShowRefresh(false);
  };

  const renderMapPin = (categories) => {
    if (categories.includes(4)) {
      return MapPinDefault;
    }
    if (categories.includes(2)) {
      return MapPinOrange;
    }
    if (categories.includes(3)) {
      return MapPinDefault;
    }
    if (categories.includes(1)) {
      return MapPinOrange;
    }
    if (categories.includes(5)) {
      return MapPinBlue;
    }
    return MapPinDefault;
  }

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
          const { id, lat, lng, categories } = location;

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
                  selectedLocation?.id === id ? MapPinSelected : renderMapPin(categories),
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
  selectedMetro: PropTypes.object,
  saveSelectedLocation: PropTypes.func,
  refreshEverything: PropTypes.func,
  saveMapBounds: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
  closePlaceImagePanel: PropTypes.func,
  closePlaceVideoPanel: PropTypes.func,
};

Map.defaultProps = {
  google: {},
  locations: null,
  selectedLocation: null,
  selectedMetro: null,
  saveSelectedLocation() {},
  refreshEverything() {},
  saveMapBounds() {},
  clearSelectedLocation() {},
  closePlaceImagePanel() {},
  closePlaceVideoPanel() {},
};

export default GoogleApiWrapper({
  apiKey: clientSideKey,
  LoadingContainer: loading,
})(Map);
