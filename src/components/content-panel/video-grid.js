/*
  Video grid 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoCardContainer from "./video-card-container";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  videoContainer: {
    maxHeight: 550,
  },
});

const VideoGrid = ({ videos, fetchVideos }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!videos || !videos.length) {
      fetchVideos();
    }
  }, [videos]);

  return (
    <>
      {videos.length > 0 ? (
        <GridList className={classes.videoContainer} cellHeight={200} cols={2}>
          {videos.map((video) => (
            <GridListTile key={video.id} cols={1}>
              <VideoCardContainer video={video} />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <Typography>
          No content found <MoodBadRoundedIcon />
        </Typography>
      )}
    </>
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
