import React from "react";
import logo from "./viva-logo.png";
import "./App.css";
import "./VivaLogo.css";
import PillBox from "./components/pill-box";
import SearchBar from "./components/search-bar";
import Footer from "./components/footer";
import Map from "./components/map";

const App = () => {
  // mock data
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
      <Map isMarkerShown />
      <Footer />
    </div>
  );
}

export default App;
