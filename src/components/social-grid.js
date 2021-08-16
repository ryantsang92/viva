/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { SocialIcon } from "./social-icon";
import { socialURLs } from "../app-constants";
import instagramIcon from "../assets/instagram-logo.svg";
import twitterIcon from "../assets/twitter-logo.svg";
import tiktokIcon from "../assets/tiktok-logo.svg";
import PropTypes from "prop-types";

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

const SocialGrid = ({ isMobile }) => {
  const hw = isMobile ? 48 : 30;
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="nowrap"
      alignItems="center"
    >
      <Box flexGrow={1} pr={1}>
        <Typography noWrap>Follow us: </Typography>
      </Box>
      <Grid container justify="flex-end">
        <Grid item>
          <SocialIcon url={INSTAGRAM} icon={instagramIcon} hw={hw} />
        </Grid>
        <Grid item>
          <SocialIcon url={TWITTER} icon={twitterIcon} hw={hw} />
        </Grid>
        <Grid item>
          <SocialIcon url={TIKTOK} icon={tiktokIcon} hw={hw} />
        </Grid>
      </Grid>
    </Box>
  );
};

SocialGrid.propTypes = {
  isMobile: PropTypes.bool,
};

SocialGrid.defaultProps = {
  isMobile: false,
};

export default SocialGrid;
