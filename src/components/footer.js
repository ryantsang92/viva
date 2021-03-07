/*
  Footer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </Grid>
      <Grid item>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Videos
        </a>
      </Grid>
    </Grid>
  );
}

export default Footer;
