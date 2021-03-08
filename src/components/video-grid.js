/*
  Video grid 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  videoContainer: {
    maxHeight: 450,
  },
});

const VideoGrid = ({ videoData }) => {
  const classes = useStyles();
  return (
    <GridList className={classes.videoContainer} cellHeight={200} cols={2}>
      {videoData.map((video) => (
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
  videoData: PropTypes.array,
};

VideoGrid.defaultProps = {
  videoData: [],
};

export default VideoGrid;
