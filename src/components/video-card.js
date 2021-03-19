/*
  Video card 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import defaultVideoImage from "../video-thumbnail.png";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  image: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "auto",
    maxWidth: 625,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
});

const getThumbnail = (video) => {
  return video.img || defaultVideoImage;
};

const imageClick = (id) => {
  console.log("Click");
};

const VideoCard = ({ video }) => {
  const classes = useStyles();

  return (
    <Box>
      <img
        className={classes.image}
        src={getThumbnail(video)}
        alt={video.title}
        onClick={() => imageClick(video.id)}
      />
      {video.title}
    </Box>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

VideoCard.defaultProps = {
  video: {},
};

export default VideoCard;
