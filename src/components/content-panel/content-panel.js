/*
  Content panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ScrollingWrapper from "../common/scrolling-wrapper";
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 15,
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
    width: 400,
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
  clearSelectedHashtag,
  clearSelectedLocationFilter,
}) => {
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

  const onHashtagFilterClose = () => {
    clearSelectedHashtag();
  };

  const onLocationFilterClose = () => {
    clearSelectedLocationFilter();
  };

  return (
    <Box className={classes.root}>
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
          >
            <Box pt={2}>
              <VideoGridContainer selectedHashtag={selectedHashtag} />
            </Box>
          </ScrollingWrapper>
        ) : (
          <Box pt={2}>
            <VideoGridContainer selectedHashtag={selectedHashtag} />
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
  clearSelectedHashtag: PropTypes.func,
  clearSelectedLocationFilter: PropTypes.func,
};

ContentPanel.defaultProps = {
  selectedHashtag: null,
  selectedLocation: null,
  filterOn: false,
  clearSelectedHashtag() {},
  clearSelectedLocationFilter() {},
};

export default ContentPanel;
