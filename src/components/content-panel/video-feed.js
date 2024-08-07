/*
  Video feed component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
    top: 0,
    zIndex: 2,
    backgroundColor: "white",
    borderBottom: "1px solid #ddd",
  },
});

const VideoFeed = ({
  loading,
  videos,
  placePanelMode,
  isMobile,
  closePlaceVideoPanel,
}) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if ((videos !== null) || placePanelMode) {
      setItems(videos?.slice(0, 5));
    }
  }, [videos, placePanelMode]);

  const fetchMoreData = () => {
    if (items?.length >= videos?.length) {
      setHasMore(false);
    } else {
      setItems(items?.concat(videos?.slice(items?.length, items?.length + 4)));
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
              pt={1} pb={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              borderBottom={1}
              className={classes.header}
            >
              {isMobile ? (
              <>
                <Box>
                  <IconButton onClick={handlePanelClose} size="small">
                    <ArrowBackIcon />
                  </IconButton>
                </Box>
                <Box flexGrow={1}>
                  <Typography align="center">Videos</Typography>
                </Box>
              </>
              ) : (
              <>
                <Box flexGrow={1}>
                  <Typography>Videos</Typography>
                </Box>
                <Box>
                  <IconButton onClick={handlePanelClose} size="small">
                    <CloseIcon />
                  </IconButton>
                </Box>
              </>
              )}
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
              height={isMobile ? "" : "calc(100vh - 116px)"}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {items?.map((video, index) => (
                <div key={index}>
                  <VideoPlayerPanelContainer
                    placePanelMode={placePanelMode}
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
  placePanelMode: PropTypes.bool,
  closePlaceVideoPanel: PropTypes.func,
};

VideoFeed.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  placePanelMode: false,
  closePlaceVideoPanel() {},
};

export default VideoFeed;
