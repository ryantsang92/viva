/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Grid } from "@material-ui/core";
import { SocialIcon } from "./social-icon";
import { socialURLs } from "../app-constants";
import { getWindowWidth } from "../common/common-functions";
import instagramIcon from "../assets/instagram-logo.svg";
import twitterIcon from "../assets/twitter-logo.svg";
import tiktokIcon from "../assets/tiktok-logo.svg";

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

const SocialGrid = () => {
  const getHeightWidth = () => {
    return getWindowWidth() <= 315 ? 20 : 30;
  }

  return (
    <Box mr={1}>
      <Grid container>
        <Grid item>
          <SocialIcon url={INSTAGRAM} icon={instagramIcon} hw={getHeightWidth()} />
        </Grid>
        <Grid item>
          <SocialIcon url={TWITTER} icon={twitterIcon} hw={getHeightWidth()} />
        </Grid>
        <Grid item>
          <SocialIcon url={TIKTOK} icon={tiktokIcon} hw={getHeightWidth()} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialGrid;
