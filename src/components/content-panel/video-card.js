/*
  Video card component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import defaultVideoImage from "../../assets/default-video-thumbnail.png";
import Image from "../common/image";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  title: {
    textAlign: "left",
    lineHeight: 1,
    marginTop: 8,
    fontSize: ".8rem",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    backgroundColor: "white",
    cursor: "pointer",
  },
  videoThumbnail: {
    boxSizing: "border-box",
    position: "relative",
    display: "block",
    transform: "scale(var(--ggs,1))",
    width: 22,
    height: 22,

    "&:before": {
      content: "",
      display: "block",
      boxSizing: "border-box",
      position: "absolute",
      width: 0,
      height: 10,
      borderTop: "5px solid transparent",
      borderBottom: "5px solid transparent",
      borderLeft: "6px solid",
      top: 6,
      left: 9,
    },
  },
});

const VideoCard = ({
  video,
  addPadding,
  videoLocation,
  saveSelectedVideo,
  saveSelectedLocation,
}) => {
  const handleClick = (video) => {
    saveSelectedVideo(video);
    saveSelectedLocation(videoLocation);
  };

  const classes = useStyles();

  return (
    <Box pr={addPadding ? 1 : 0} pb={1}>
      <div className={classes.container}>
        {/* <div className={classes.videoThumbnail} /> */}
        <Image
          alt={video.title}
          height="100%"
          width="100%"
          src={video.thumbnail || defaultVideoImage}
          onClick={() => handleClick(video)}
        />
      </div>
      <Typography className={classes.title}>
        {video.title || "Test Title"}
      </Typography>
    </Box>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
  addPadding: PropTypes.bool,
  videoLocation: PropTypes.object,
  saveSelectedVideo: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
};

VideoCard.defaultProps = {
  video: {},
  addPadding: false,
  videoLocation: null,
  saveSelectedVideo() {},
  saveSelectedLocation() {},
};

export default VideoCard;
