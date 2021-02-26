import React from "react";
import logo from "./viva-logo.png";
import "./App.css";
import "./VivaLogo.css";
import Box from "@material-ui/core/Box";
import PillBox from "./components/pill-box";
import SearchBar from "./components/search-bar";
import Footer from "./components/footer";
import MapContainer from "./components/map";

const App = () => {

  // mock data section ////////////////////////////
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

  const places = [
    {
      name: "Improv Asylum",
      title: "Improv Asylum",
      lat: 42.3631,
      lng: -71.0554,
      id: 1,
    },
    {
      name: "Limelight",
      title: "Limelight",
      lat: 42.3513581,
      lng: -71.064757,
      id: 2,
    },
    {
      name: "Paint Nite",
      title: "Paint Nite",
      lat: 42.383486,
      lng: -71.109816,
      id: 3,
    },
    {
      name: "A4cade",
      title: "A4cade",
      lat: 42.362142,
      lng: -71.098406,
      id: 4,
    },
  ];
  // end mock data section ////////////////////////

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="VivaLogo" />
        <Box mb={2}>
          <SearchBar />
          <PillBox buttonTitles={buttonTitles} />
        </Box>
      </header>
      <MapContainer places={places}/>
      <Footer />
    </div>
  );
};

export default App;
