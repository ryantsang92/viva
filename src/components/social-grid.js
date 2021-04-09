/*
  header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topGridSocials: {
    // textAlign: "right",
    // float: "right",
  },
}));

const SocialGrid = () => {
  const classes = useStyles();

  return (
    <>
      
      <Box mr={2} className={classes.topGridSocials}>
        <Grid container justify="right" spacing={1}>
          <Grid item>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://www.instagram.com/vivatheapp/"
            />
          </Grid>
          <Grid item>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/vivatheapp"
            />
          </Grid>
          <Grid item>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://www.tiktok.com/@vivatheapp"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SocialGrid;
