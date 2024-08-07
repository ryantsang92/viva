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
import ImageFeedContainer from "./image-feed-container";
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
  placeContentPanel: {
    position: "absolute",
    zIndex: 90,
  },
  regContentPanel: {
    position: "relative",
  },
});

const ContentPanel = ({
  selectedCategory,
  selectedLocation,
  isMobile,
  refresh,
  panelOpen,
  clearSelectedCategory,
  setRefresh,
  imagePanelOpen,
  videoPanelOpen,
}) => {
  const classes = useStyles();

  const onCategoryFilterClose = () => {
    setRefresh();
    clearSelectedCategory();
  };

  const renderContentFeed = (isMobile) => {
    if (imagePanelOpen) {
      return <ImageFeedContainer isMobile={isMobile} />;
    }
    if (videoPanelOpen) {
      return (
        <VideoFeedContainer
          selectedLocation={selectedLocation}
          selectedCategory={selectedCategory}
          placePanelMode={videoPanelOpen}
          // refresh={true}
          isMobile={isMobile}
        />
      );
    }
    return (
      <VideoFeedContainer
        selectedCategory={selectedCategory}
        refresh={refresh}
        isMobile={isMobile}
      />
    );
  };

  return (
    <Box
      ml={1}
      mr={1}
      className={
        panelOpen ? classes.placeContentPanel : classes.regContentPanel
      }
    >
      <div
        className={
          isMobile ? classes.videoContainerMobile : classes.videoContainer
        }
      >
        {selectedCategory && (
          <Box
            pt={2}
            pb={1}
            borderBottom={1}
            className={classes.titleContainer}
          >
            {selectedCategory && (
              <div className={classes.title}>
                {selectedCategory?.category}{" "}
                <IconButton onClick={onCategoryFilterClose} size="small">
                  <CloseIcon />
                </IconButton>
              </div>
            )}
          </Box>
        )}
        {!isMobile ? (
          <ScrollingWrapper
            refresh={selectedCategory || false}
            isMobile={isMobile}
          >
            {renderContentFeed(isMobile)}
          </ScrollingWrapper>
        ) : (
          <>{renderContentFeed(isMobile)}</>
        )}
      </div>
    </Box>
  );
};

ContentPanel.propTypes = {
  selectedCategory: PropTypes.object,
  isMobile: PropTypes.bool,
  refresh: PropTypes.bool,
  panelOpen: PropTypes.bool,
  clearSelectedCategory: PropTypes.func,
  setRefresh: PropTypes.func,
  imagePanelOpen: PropTypes.bool,
};

ContentPanel.defaultProps = {
  selectedCategory: null,
  isMobile: false,
  refresh: false,
  panelOpen: false,
  clearSelectedCategory() {},
  setRefresh() {},
  imagePanelOpen: false,
};

export default ContentPanel;
