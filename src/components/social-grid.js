/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@material-ui/core/styles";
import { socialURLs } from "../app-constants";

const useStyles = makeStyles((theme) => ({
  topGridSocials: {
    // textAlign: "right",
    // float: "right",
  },
}));

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

const socialIcon = (url) => {
  return (
    <SocialIcon
      style={{ height: 30, width: 30 }}
      target="_blank"
      rel="noopener noreferrer"
      url={url}
    />
  );
};

const SocialGrid = () => {
  const classes = useStyles();

  return (
    <>
      
      <Box mr={2} className={classes.topGridSocials}>
        <Grid container spacing={1}>
          <Grid item>{socialIcon(INSTAGRAM)}</Grid>
          <Grid item>{socialIcon(TWITTER)}</Grid>
          <Grid item>{socialIcon(TIKTOK)}</Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SocialGrid;
