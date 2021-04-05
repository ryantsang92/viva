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
  playerArea: {
    maxWidth: 500,
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
      <Box pb={1}>
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
        <Typography>{video.title}</Typography>
        <Typography>{video.description}</Typography>
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
