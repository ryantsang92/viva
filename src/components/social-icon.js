/*
  Social icon component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import instagramIcon from "../assets/instagram-logo.svg";
import tiktokIcon from "../assets/tiktok-logo.svg";
import { formatDate } from "../common/common-functions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userhandle: {
    fontSize: 15,
  },
  videoDate: {
    fontSize: 13,
    color: "#555",
  },
});

const generateURL = (user, platform) => {
  switch (platform) {
    case "TikTok":
      return "https://www.tiktok.com/" + user;
    case "Instagram":
      return "https://www.instagram.com/" + user;
    default:
      return "#";
  }
};

const getIcon = (platform) => {
  switch (platform) {
    case "TikTok":
      return tiktokIcon;
    case "Instagram":
      return instagramIcon;
    default:
      return null;
  }
};

export const SocialIcon = ({ url, icon, user, platform, hw, date }) => {
  const classes = useStyles();

  return (
    <a
      href={url || generateURL(user, platform)}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box pr={1}>
          <img
            src={icon || getIcon(platform)}
            alt={platform}
            style={{ height: hw, width: hw }}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          {user && (
            <Typography className={classes.userhandle}>{user}</Typography>
          )}
          {date && (
            <Typography className={classes.videoDate}>
              {formatDate(date)}
            </Typography>
          )}
        </Box>
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
