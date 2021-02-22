import React from "react";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <Grid container justify="center" spacing={2}>
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
