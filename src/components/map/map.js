/*
  Map component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MapPinSelected from "../../assets/map-pin-selected.png";
import { renderMapPin } from "../../common/common-functions";
import { apiKeys } from "../../app-constants";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GreenButton from "../common/green-button";
import { Link } from "react-router-dom";

const { clientSideKey } = apiKeys;

const useStyles = makeStyles({
  infoWindow: {
    textAlign: "left",
  },
  marker: {
    height: 36,
    width: 30,
    cursor: "pointer",
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
        visibility: "off",
      },
    ],
  },
];

const Map = ({
  locations,
  selectedLocation,
  selectedMetro,
  refresh,
  saveSelectedLocation,
  refreshEverything,
  saveMapBounds,
  mapBounds,
  clearRefresh,
  closePlacePanels,
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

  const onMarkerClick = (key, childProps) => {
    console.log(key);
    console.log(childProps);
    saveSelectedLocation(childProps.markerData);
  };

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  const getAndSaveBounds = (marginBounds) => {
    const latMin = marginBounds[2];
    const latMax = marginBounds[0];
    const lngMin = marginBounds[1];
    const lngMax = marginBounds[3];

    saveMapBounds({
      latMin: latMin,
      latMax: latMax,
      lngMin: lngMin,
      lngMax: lngMax,
    });
  };

  const onMapChange = (center, zoom, bounds, marginBounds) => {
    getAndSaveBounds(bounds);
    setCenter(center);
    setZoom(zoom)
    setShowRefresh(true);
  };

  const onRefreshButtonClick = () => {
    closePlacePanels();
    refreshEverything(mapBounds);
    setShowRefresh(false);
  };

  const createMapOptions = (maps) => {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.ZoomControlStyle.SMALL,
      },
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: false,
    };
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
      <GoogleMapReact
        bootstrapURLKeys={{ key: clientSideKey }}
        yesIWantToUseGoogleMapApiInternals
        onBoundsChange={onMapChange}
        onZoomChange={onMapChange}
        zoom={zoom}
        resetBoundsOnResize
        center={center}
        initialCenter={center}
        onChildClick={onMarkerClick}
        options={createMapOptions}
        onGoogleApiLoaded={({ map, maps }) => mapLoaded(maps, map)}
      >
        {locations?.map((location) => {
          const { id, lat, lng, categories } = location;
          return (
            <Link
              to={"/" + id}
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              markerData={location}
              key={id}
            >
              <img
                className={classes.marker}
                src={
                  selectedLocation?.id === id
                    ? MapPinSelected
                    : renderMapPin(categories)
                }
                alt={id}
              />
            </Link>
          );
        })}
      </GoogleMapReact>
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
  closePlacePanels: PropTypes.func,
};

Map.defaultProps = {
  google: {},
  locations: null,
  selectedLocation: null,
  selectedMetro: null,
  saveSelectedLocation() {},
  refreshEverything() {},
  saveMapBounds() {},
  closePlacePanels() {},
};

export default Map;
