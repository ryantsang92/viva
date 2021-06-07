/*
  Video grid component

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

const VideoGrid = ({
  loading,
  videos,
  mapBounds,
  fetchVideos,
  fetchVideosV2,
  isMobile,
}) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (videos === null) {
      fetchVideos();
      // const { latMin, latMax, lngMin, lngMax } = mapBounds;
      // fetchVideosV2(latMin, latMax, lngMin, lngMax);
    } else {
      setItems(videos?.slice(0, 5));
    }
    // if (mapBounds) {
    //   console.log('test');
    //   const { latMin, latMax, lngMin, lngMax } = mapBounds;
    //   fetchVideosV2(latMin, latMax, lngMin, lngMax);
    // }
    // if (videos !== null) {
    //   setItems(videos?.slice(0, 5));
    // }
  }, [videos, fetchVideos, mapBounds]);

  const fetchMoreData = () => {
    if (items?.length >= videos?.length) {
      setHasMore(false);
    } else {
      setItems(items?.concat(videos?.slice(items?.length - 1, items?.length + 4)));
    }
  };

  const loadingComponent = (
    <div className={classes.loading}>
      <Loading />
    </div>
  );

  return (
    <>
      {loading ? (
        <>{loadingComponent}</>
      ) : (
        <>
          {videos?.length > 0 ? (
            <>
              <InfiniteScroll
                className={classes.infiniteScroll}
                dataLength={items?.length}
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
  mapBounds: PropTypes.object,
  fetchVideos: PropTypes.func,
};

VideoGrid.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  mapBounds: null,
  fetchVideos() {},
};

export default VideoGrid;
