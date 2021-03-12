/*
  Video grid 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  videoContainer: {
    maxHeight: 450,
  },
});

const VideoGrid = ({ videos, fetchVideos }) => {
  const classes = useStyles();

  console.log(videos);
  useEffect(() => {
    if (!videos || !videos.length) {
      fetchVideos();
    }
  });

  return (
    <GridList className={classes.videoContainer} cellHeight={200} cols={2}>
      {videos.map((video) => (
        <GridListTile key={video.img} cols={1}>
          <img src={video.img} alt={video.title} />
        </GridListTile>
        // <VideoCard video={video} />
        // to-do: figure out why style is breaking when this gets destructured
      ))}
    </GridList>
  );
};

VideoGrid.propTypes = {
  videos: PropTypes.array,
  fetchVideos: PropTypes.func,
};

VideoGrid.defaultProps = {
  videos: [],
  fetchVideos() {},
};

export default VideoGrid;
