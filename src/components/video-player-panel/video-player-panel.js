/*
  Video panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ReactVideo from "./video-player/react-video";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  playerBar: {
    padding: 8,
    position: 'sticky',
    top: 0,
    width: '100%',
    background: 'white',
    zIndex: 99,
    display: 'flex',
  },
  playerArea: {
    maxWidth: 400,
    position: 'relative',
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
});

const VideoPanel = ({ video, clearSelectedVideo }) => {
  console.log("VideoPanel");
  console.log(video);
  const classes = useStyles();
  return (
    <Box className={classes.playerArea}>
      <Box className={classes.playerBar}>
        <Typography className={classes.username}>Username (TikTok)</Typography>
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => clearSelectedVideo()}
        />
      </Box>
      <Box>
        <ReactVideo
          src={video.url}
          poster={video.thumbnail}
          primaryColor="#278A6E"
          // autoPlay
        />
        <Typography>{video.title}Test Title</Typography>
        <Typography>{video.description}I absolutely Adore being here with this and that and all the other stuff and even more of the other stuff and yeah and even more and more stuff that is just delicious and fun and exciting</Typography>
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
