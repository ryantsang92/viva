/*
  Video grid 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoCardContainer from "./video-card-container";
import Loading from "../loading";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  videoContainer: {
    minHeight: 550,
    height: "calc(100vh - 140px)",
    paddingTop: 15,
    paddingBottom: 25,
    margin: "0 !important",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  videoBox: {
    padding: "10px 8px 0 8px !important",
  },
});

const VideoGrid = ({ loading, videos, fetchVideos }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!videos || !videos.length) {
      fetchVideos();
    }
  }, [videos]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {videos.length > 0 ? (
            <GridList className={classes.videoContainer} cellHeight="auto">
              {videos.map((video) => (
                <GridListTile
                  key={video.id}
                  cols={1}
                  className={classes.videoBox}
                >
                  <VideoCardContainer video={video} />
                </GridListTile>
              ))}
            </GridList>
          ) : (
            <Box pt={4}>
              <Typography>
                No content found <MoodBadRoundedIcon />
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

VideoGrid.propTypes = {
  loading: PropTypes.bool,
  videos: PropTypes.array,
  fetchVideos: PropTypes.func,
};

VideoGrid.defaultProps = {
  loading: false,
  videos: [],
  fetchVideos() {},
};

export default VideoGrid;
