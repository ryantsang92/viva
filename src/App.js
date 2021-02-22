import React, { useState } from "react";
import logo from "./viva-logo.png";
import "./App.css";
import "./VivaLogo.css";
import PillBox from "./components/pill-box";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import SearchBar from "./components/search-bar";
import Footer from "./components/footer";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function App() {
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

  const buttonTitles = [
    { name: "#TreatYoSelf", value: "1" },
    { name: "#GreatOutdoors", value: "2" },
    { name: "#CozyPlaces", value: "3" },
    { name: "#WalletFriendly", value: "4" },
    { name: "#DateYourself", value: "5" },
    { name: "#HiddenGems", value: "6" },
    { name: "#FamilyFriendly", value: "7" },
    { name: "#PicturePerfect", value: "8" },
  ];

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="VivaLogo" />
        <p>
          <SearchBar />
          <PillBox buttonTitles={buttonTitles} />
        </p>
      </header>
      {/* <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        /> */}
      <Footer />
    </div>
  );
}

export default App;
