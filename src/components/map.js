import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const mapStyles = {
  width: "100%",
  height: "100%",
};

// const MapContainer = () => {
//   return (
//     <Map
//       google={this.props.google}
//       zoom={14}
//       style={mapStyles}
//       initialCenter={{
//         lat: -1.2884,
//         lng: 36.8233,
//       }}
//     />
//   );
// };

const MapContainer = (props) => {
    console.log('props.google');
    console.log(props.google);
    return (
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
}

// Map.propTypes = {
//   isMarkerShown: PropTypes.bool,
// };

// Map.defaultProps = {
//   isMarkerShown: false,
// };

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxUpiuJMJwjPvtBeuXJyRcm66jqEx38kA",
})(MapContainer);
