/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Grid } from "@material-ui/core";
import { SocialIcon } from "./social-icon";
import { socialURLs } from "../app-constants";
import instagramIcon from "../assets/instagram-logo.svg";
import twitterIcon from "../assets/twitter-logo.svg";
import tiktokIcon from "../assets/tiktok-logo.svg";

const { INSTAGRAM, TWITTER, TIKTOK } = socialURLs;

const SocialGrid = () => {

  return (
    <>
      <Grid container justify="flex-end">
        <Grid item>
          <SocialIcon
            url={INSTAGRAM}
            icon={instagramIcon}
            hw={30}
          />
        </Grid>
        <Grid item>
          <SocialIcon url={TWITTER} icon={twitterIcon} hw={30} />
        </Grid>
        <Grid item>
          <SocialIcon url={TIKTOK} icon={tiktokIcon} hw={30} />
        </Grid>
      </Grid>
    </>
  );
};

export default SocialGrid;
