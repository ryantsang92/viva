/*
  Footer

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Grid, Divider, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <Box mt={1}>
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
        <Divider orientation="vertical" flexItem />
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
    </Box>
  );
};

export default Footer;
