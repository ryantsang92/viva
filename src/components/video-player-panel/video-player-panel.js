/*
  Video panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import "./video-react.css";
import { Player } from "video-react";
import { SocialIcon } from "../social-icon";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  playerBar: {
    padding: 8,
    position: "sticky",
    top: 0,
    width: "100%",
    background: "white",
    zIndex: 99,
    display: "flex",
  },
  playerArea: {
    maxWidth: 310,
    position: "relative",
  },
  username: {
    fontSize: 20,
  },
  closeIcon: {
    cursor: "pointer",
    textAlign: "right",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
  },
  infoContainer: {
    padding: 10,
    paddingBottom: 30,
  },
});

const VideoPanel = ({ video, clearSelectedVideo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.playerArea}>
      <Box className={classes.playerBar}>
        <Typography variant="h6">{video.title || "Test Title"}</Typography>
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => clearSelectedVideo()}
        />
      </Box>
      <Box>
        <Player
          playsInline
          poster={video.thumbnail}
          src={video.url}
          fluid={false}
          width={310}
          height={550}
        />
        <Box className={classes.infoContainer}>
          <Typography>{video.description || "no description"}</Typography>
          <Box pt={1} pb={1}>
            <Divider />
          </Box>
          <SocialIcon
            user={video.user}
            platform={video.user_platform}
            hw={20}
          />
        </Box>
      </Box>
    </Box>
  );
};

VideoPanel.propTypes = {
  video: PropTypes.object,
  clearSelectedVideo: PropTypes.func,
};

VideoPanel.defaultProps = {
  video: {},
  clearSelectedVideo() {},
};

export default VideoPanel;
