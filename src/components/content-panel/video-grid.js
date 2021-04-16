/*
  Video grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoCardContainer from "./video-card-container";
import Loading from "../loading";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  loading: {
    maxWidth: 400,
  },
  videoContainer: {
    maxWidth: 400,
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
  videoContainerMobile: {
    width: "100%",
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

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  useEffect(() => {
    if (!videos || !videos.length) {
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
          {videos.length > 0 ? (
            <GridList
              className={isMobile ? classes.videoContainerMobile : classes.videoContainer}
              cellHeight="auto"
              cols={isMobile && width > 512 ? width / 256 : 2} // revisit this logic
              // cols={isMobile ? width / 256 : 2} 
            >
              {videos.map((video, index) => (
                <GridListTile key={video.id} cols={1}>
                  <VideoCardContainer
                    video={video}
                    addPadding={index % 2 === 1 ? false : true}
                  />
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
