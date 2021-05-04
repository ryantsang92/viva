/*
  Video grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayerPanelContainer from "../video-player-panel/video-player-panel-container";
import Loading from "../common/loading";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  loading: {
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    width: 300,
    height: 225,
  },
});

const VideoGrid = ({ loading, videos, fetchVideos, isMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (videos === null) {
      fetchVideos();
    }
  }, [videos]);

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {videos && videos.length > 0 ? (
            <>
              {videos.map((video, index) => (
                <div key={index}>
                  <VideoPlayerPanelContainer
                    video={video}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </>
          ) : (
            <Box pt={1}>
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
  isMobile: PropTypes.bool,
  videos: PropTypes.array,
  fetchVideos: PropTypes.func,
};

VideoGrid.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  fetchVideos() {},
};

export default VideoGrid;
