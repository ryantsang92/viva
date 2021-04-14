/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Grid } from "@material-ui/core";
import { SocialIcon } from "./social-icon";
import { socialURLs } from "../app-constants";
import instagramIcon from "../assets/IG_green.png";
import twitterIcon from "../assets/twitter_green.png";
import tiktokIcon from "../assets/tiktok_green.png";

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

const SocialGrid = () => {
  return (
    <Box mr={1}>
      <Grid container spacing={1}>
        <Grid item>
          <SocialIcon url={INSTAGRAM} icon={instagramIcon} hw={30} />
        </Grid>
        <Grid item>
          <SocialIcon url={TWITTER} icon={twitterIcon} hw={30} />
        </Grid>
        <Grid item>
          <SocialIcon url={TIKTOK} icon={tiktokIcon} hw={30} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialGrid;
