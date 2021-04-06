/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BodyGridContainer from "./components/body-grid-container";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <BodyGridContainer />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
