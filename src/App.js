/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import logo from "./viva-logo.png";
import "./App.css";
import "./VivaLogo.css";
import Box from "@material-ui/core/Box";
import PillBoxContainer from "./components/pill-box-container";
import SearchBar from "./components/search-bar";
import Footer from "./components/footer";
import MapContainer from "./components/map-container";
import ContentPanel from "./components/content-panel";
import Grid from "@material-ui/core/Grid";
import { buttonTitles, places } from "./mock-data";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <img src={logo} alt="logo" className="VivaLogo" />
          <Box mb={2}>
            <SearchBar />
            {/* <PillBox buttonTitles={buttonTitles} /> */}
            <PillBoxContainer />
          </Box>
        </header>
        <Grid container spacing={2}>
          <Grid item>
            <ContentPanel />
          </Grid>
          <Grid item>
            <MapContainer places={places} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
