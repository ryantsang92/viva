/*
  Video feed component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  infiniteScroll: {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const VideoFeed = ({
  loading,
  videos,
  panelOpen,
  images,
  placeVideos,
  isMobile,
  refresh,
  clearRefresh,
}) => {
  console.log(loading);
  console.log(videos);
  console.log(refresh);

  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (videos !== null && refresh) {
      setItems(videos?.slice(0, 5));
      clearRefresh();
    }
  }, [videos, refresh, clearRefresh]);

  // useEffect(() => {
  //   if (images) {
  //     setItems(images?.slice(0, 5));
  //     clearRefresh();
  //   }
  // }, [images]);

  const fetchMoreData = () => {
    if (items?.length >= videos?.length) {
      setHasMore(false);
    } else {
      setItems(
        items?.concat(videos?.slice(items?.length - 1, items?.length + 4))
      );
    }
  };

  const loadingComponent = (
    <div className={classes.loading}>
      <Loading />
    </div>
  );

  console.log(items);

  return (
    <>
      {loading ? (
        <>{loadingComponent}</>
      ) : (
        <>
          {videos?.length > 0 ? (
            <InfiniteScroll
              className={classes.infiniteScroll}
              dataLength={items?.length || 0}
              scrollThreshold={0.9}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<>{loadingComponent}</>}
              height="calc(100vh - 116px)"
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {items?.map((video, index) => (
                <div key={index}>
                  <VideoPlayerPanelContainer
                    video={video}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </InfiniteScroll>
          ) : (
            <Box pt={1} justifyContent="center">
              <Typography align="center">
                No content found <MoodBadRoundedIcon />
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

VideoFeed.propTypes = {
  loading: PropTypes.bool,
  isMobile: PropTypes.bool,
  videos: PropTypes.array,
  images: PropTypes.array,
  placeVideos: PropTypes.array,
  panelOpen: PropTypes.bool,
  refresh: PropTypes.bool,
};

VideoFeed.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  images: null,
  placeVideos: null,
  panelOpen: false,
  refresh: false,
};

export default VideoFeed;
