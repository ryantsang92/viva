/*
  Content panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ScrollingWrapper from "../common/scrolling-wrapper";
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
  },
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
    margin: "0 !important",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflow: "hidden",
  },
  titleContainer: {
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 99,
  },
});

const ContentPanel = ({
  selectedHashtag,
  selectedLocation,
  filterOn,
  isMobile,
  clearSelectedHashtag,
  clearSelectedLocationFilter,
}) => {
  const classes = useStyles();

  const onHashtagFilterClose = () => {
    clearSelectedHashtag();
  };

  const onLocationFilterClose = () => {
    clearSelectedLocationFilter();
  };

  return (
    <Box className={classes.root} ml={1} mr={1}>
      <div
        className={
          isMobile ? classes.videoContainerMobile : classes.videoContainer
        }
      >
        {(selectedHashtag || (selectedLocation && filterOn)) && (
          <Box pt={2} pb={1} className={classes.titleContainer}>
            {selectedHashtag && (
              <div className={classes.title}>
                {selectedHashtag.hashtag}{" "}
                <IconButton onClick={onHashtagFilterClose} size="small">
                  <CloseIcon />
                </IconButton>
              </div>
            )}
            {selectedLocation && filterOn && (
              <div className={classes.title}>
                {selectedLocation.name}{" "}
                <IconButton onClick={onLocationFilterClose} size="small">
                  <CloseIcon />
                </IconButton>
              </div>
            )}
          </Box>
        )}
        {!isMobile ? (
          <ScrollingWrapper
            refresh={selectedHashtag || (selectedLocation && filterOn) || false}
            isMobile={isMobile}
          >
            <Box pt={2}>
              <VideoGridContainer
                selectedHashtag={selectedHashtag}
                isMobile={isMobile}
              />
            </Box>
          </ScrollingWrapper>
        ) : (
          <Box pt={2}>
            <VideoGridContainer
              selectedHashtag={selectedHashtag}
              isMobile={isMobile}
            />
          </Box>
        )}
      </div>
    </Box>
  );
};

ContentPanel.propTypes = {
  selectedHashtag: PropTypes.object,
  selectedLocation: PropTypes.object,
  filterOn: PropTypes.bool,
  isMobile: PropTypes.bool,
  clearSelectedHashtag: PropTypes.func,
  clearSelectedLocationFilter: PropTypes.func,
};

ContentPanel.defaultProps = {
  selectedHashtag: null,
  selectedLocation: null,
  filterOn: false,
  isMobile: false,
  clearSelectedHashtag() {},
  clearSelectedLocationFilter() {},
};

export default ContentPanel;
