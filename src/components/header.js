/*
  header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import logo from "../viva-logo-transparent.png";
import "../VivaLogo.css";
import { Box, Typography } from "@material-ui/core";
import PillBoxContainer from "./pill-box-container";
// import SearchBar from "./search-bar";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="VIVA" className="VivaLogo" />
      <Box mt={2} mb={2}>
        <Typography align="center">Get in. Get out. Get going</Typography>
      </Box>
      <Box mb={1}>
        {/* search bar will be added later */}
        {/* <SearchBar /> */}
        <PillBoxContainer />
      </Box>
    </header>
  );
};

export default Header;
