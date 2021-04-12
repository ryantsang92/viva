/*
  Social grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import instagramIcon from "../assets/IG_green.png";
import tiktokIcon from "../assets/tiktok_green.png";

const generateURL = (user, platform) => {
  switch (platform) {
    case "TikTok":
      return "https://www.tiktok.com/" + user;
    case "Instagram":
      return "https://www.instagram.com/" + user;
  }
};

const getIcon = (platform) => {
  switch (platform) {
    case "TikTok":
      return tiktokIcon;
    case "Instagram":
      return instagramIcon;
  }
};

export const SocialIcon = ({ url, icon, user, platform, hw }) => {
  return (
    <a
      href={url || generateURL(user, platform)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box pr={1}>
          <img
            src={icon || getIcon(platform)}
            style={{ height: hw, width: hw }}
          />
        </Box>
        <Typography>{user}</Typography>
      </Box>
    </a>
  );
};

SocialIcon.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string,
  user: PropTypes.string,
  platform: PropTypes.string,
  hw: PropTypes.number,
};

SocialIcon.defaultProps = {
  url: null,
  icon: null,
  user: null,
  platform: null,
  hw: 30,
};

export default SocialIcon;
