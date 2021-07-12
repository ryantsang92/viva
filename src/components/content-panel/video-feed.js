/*
  Video feed component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
  header: {
    position: "sticky",
  },
});

const VideoFeed = ({
  loading,
  videos,
  placePanelMode,
  isMobile,
  refresh,
  clearRefresh,
  closePlaceVideoPanel,
}) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if ((videos !== null && refresh) || placePanelMode) {
      setItems(videos?.slice(0, 5));
      clearRefresh();
    }
  }, [videos, refresh, clearRefresh]);

  const fetchMoreData = () => {
    if (items?.length >= videos?.length) {
      setHasMore(false);
    } else {
      setItems(
        items?.concat(videos?.slice(items?.length - 1, items?.length + 4))
      );
    }
  };

  const handlePanelClose = () => {
    closePlaceVideoPanel();
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
          {placePanelMode && (
            <Box
              p={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              borderBottom={1}
              className={classes.header}
            >
              <Box flexGrow={1}>
                <Typography>Videos</Typography>
              </Box>
              <Box>
                <IconButton onClick={handlePanelClose} size="small">
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          )}
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
  refresh: PropTypes.bool,
  placePanelMode: PropTypes.bool,
  closePlaceVideoPanel: PropTypes.func,
};

VideoFeed.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  refresh: false,
  placePanelMode: false,
  closePlaceVideoPanel() {},
};

export default VideoFeed;
