/*
  Video grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoCardContainer from "./video-card-container";
import ScrollToTop from "../common/scroll-to-top";
import Loading from "../loading";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  loading: {
    width: "100%",
    height: "100%",
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
        <div className={classes.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {videos && videos.length > 0 ? (
            <>
              <ScrollToTop />
              <GridList
                cellHeight="auto"
                // className={}
                // cols={isMobile && width > 512 ? width / 256 : 2} // revisit this logic
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
            </>
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
