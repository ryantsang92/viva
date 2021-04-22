/*
  Content panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ScrollingWrapper from "../common/scrolling-wrapper";
import ScrollToTop from 'react-router-scroll-top'
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

// to-do: find a better way to style this
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
    height: "calc(100vh - 116px)",
    margin: "0 !important",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflow: "scroll",
  },
  titleContainer: {
    // padding: "16px 0",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 99,
  },
  scrollWrapper: {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ContentPanel = ({
  selectedHashtag,
  selectedLocation,
  filterOn,
  clearSelectedHashtag,
  clearSelectedLocationFilter,
}) => {
  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);

  const myRef = useRef(null);
  console.log(myRef);
  const executeScroll = (ref) => {
    console.log("executeScroll");
    console.log(ref.current.offsetTop);
    window.scrollTo(0, ref.current.offsetTop);
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    // if (selectedHashtag || selectedLocation) {
    //   console.log("here");
    //   executeScroll(myRef);
    // }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
    // }, [selectedHashtag, selectedLocation]);
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
        {(selectedHashtag || selectedLocation) && (
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
        {/* <div id="videoGrid" ref={myRef}> */}
        {/* <div className={classes.scrollWrapper}> */}
          <ScrollingWrapper>
            <Box pt={2}>
              <VideoGridContainer selectedHashtag={selectedHashtag} />
            </Box>
          </ScrollingWrapper>
        {/* </div> */}
        {/* </div> */}
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
