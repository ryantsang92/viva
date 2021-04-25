/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import "./App.css";
import { SafeAreaView } from "react-native";
import HeaderContainer from "./components/header-container";
import BodyGridContainer from "./components/body-grid-container";

const App = () => {
  return (
    <SafeAreaView>
      <div className="App">
        <HeaderContainer />
        <BodyGridContainer />
      </div>
    </SafeAreaView>
  );
};

export default App;
