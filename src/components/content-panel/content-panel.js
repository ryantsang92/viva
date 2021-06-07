/*
  Content panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ScrollingWrapper from "../common/scrolling-wrapper";
import VideoFeedContainer from "./video-feed-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    backgroundColor: "#F2F2F2",
    display: "inline-block",
    borderRadius: 25,
    textAlign: "center",
    padding: "5px 10px 5px",
  },
  videoContainer: {
    minWidth: 310,
    height: "calc(100vh - 116px)",
    margin: "0 !important",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflow: "scroll",
  },
  videoContainerMobile: {
    width: "100%",
    // height: "calc(100vh - 116px)",
    margin: "0 !important",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflow: "hidden",
    // overflow: "scroll",
  },
  titleContainer: {
    position: "sticky",
    backgroundColor: "white",
    top: 0,
    zIndex: 99,
  },
  bottomBorder: {
    borderBottom: 2,
    borderBottomColor: "#000000",
  },
});

const ContentPanel = ({
  selectedHashtag,
  isMobile,
  clearSelectedHashtag,
}) => {
  const classes = useStyles();

  const onHashtagFilterClose = () => {
    clearSelectedHashtag();
  };

  return (
    <Box ml={1} mr={1}>
      <div
        className={
          isMobile ? classes.videoContainerMobile : classes.videoContainer
        }
      >
        {selectedHashtag && (
          <Box
            pt={2}
            pb={1}
            borderBottom={1}
            className={classes.titleContainer}
          >
            {selectedHashtag && (
              <div className={classes.title}>
                {selectedHashtag.hashtag}{" "}
                <IconButton onClick={onHashtagFilterClose} size="small">
                  <CloseIcon />
                </IconButton>
              </div>
            )}
          </Box>
        )}
        {!isMobile ? (
          <ScrollingWrapper
            refresh={selectedHashtag || false}
            filterOn={selectedHashtag}
            isMobile={isMobile}
          >
            <VideoFeedContainer
              selectedHashtag={selectedHashtag}
              isMobile={isMobile}
            />
          </ScrollingWrapper>
        ) : (
          <VideoFeedContainer
            selectedHashtag={selectedHashtag}
            isMobile={isMobile}
          />
        )}
      </div>
    </Box>
  );
};

ContentPanel.propTypes = {
  selectedHashtag: PropTypes.object,
  isMobile: PropTypes.bool,
  clearSelectedHashtag: PropTypes.func,
};

ContentPanel.defaultProps = {
  selectedHashtag: null,
  isMobile: false,
  clearSelectedHashtag() {},
};

export default ContentPanel;
