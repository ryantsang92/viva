import React from "react";
import Box from "@material-ui/core/Box";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

const center = {
  lat: 42.3601,
  lng: -71.0589,
};

// to-do: fix map styling and positioning
const mapStyles = {
  marginLeft: "30px",
  width: "95%",
  height: "95%",
};

const MapContainer = ({ loaded, google, places }) => {
  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        // <Box mx="2">
          <Map
            google={google}
            zoom={13}
            // style={mapStyles}
            initialCenter={center}
          >
            {places.map((place) => {
              return (
                <Marker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                />
              );
            })}
          </Map>
        // </Box>
      )}
    </>
  );
};

MapContainer.propTypes = {
  google: PropTypes.object,
  places: PropTypes.array,
};

MapContainer.defaultProps = {
  google: {},
  places: [],
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(MapContainer);
