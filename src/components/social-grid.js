/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Grid } from "@material-ui/core";
// import { SocialIcon } from "react-social-icons";
import { socialURLs } from "../app-constants";
import instagramIcon from "../assets/IG_green.png";
import twitterIcon from "../assets/twitter_green.png";
import tiktokIcon from "../assets/tiktok_green.png";

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

// const socialIcon = (url) => {
//   return (
//     <SocialIcon
//       style={{ height: 30, width: 30 }}
//       target="_blank"
//       rel="noopener noreferrer"
//       url={url}
//     />
//   );
// };

const socialIcon = (url, icon) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} style={{ height: 30, width: 30 }} />
    </a>
  );
};

const SocialGrid = () => {
  return (
    <>
      <Box mr={2}>
        <Grid container spacing={1}>
          <Grid item>{socialIcon(INSTAGRAM, instagramIcon)}</Grid>
          <Grid item>{socialIcon(TWITTER, twitterIcon)}</Grid>
          <Grid item>{socialIcon(TIKTOK, tiktokIcon)}</Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SocialGrid;
