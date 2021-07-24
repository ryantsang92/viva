/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/video-react/dist/video-react.css";
import { SafeAreaView } from "react-native";
import HeaderContainer from "./components/header-container";
import BodyGridContainer from "./components/body-grid-container";
import { Route } from "react-router-dom";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <div>
      <Route path="/">
        <SafeAreaView>
          <div className="App">
            <HeaderContainer isMobile={isMobile} />
            <BodyGridContainer isMobile={isMobile} />
          </div>
        </SafeAreaView>
      </Route>
    </div>
  );
};

export default App;
