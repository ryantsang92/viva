/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import "./App.css";
import HeaderContainer from "./components/header-container";
import BodyGridContainer from "./components/body-grid-container";

const App = () => {
  return (
    <>
      <div className="App">
        <HeaderContainer />
        <BodyGridContainer />
      </div>
    </>
  );
};

export default App;
