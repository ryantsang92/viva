/*
  Scroll to top wrapper component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  scrollingWrapperContainer: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-overflow-scrolling": "touch",
    height: "100%",
    position: "relative",
  },
  scrollToTopIconContainer: {
    position: "relative",
    // top: 45,
    left: "50%",
    transform: "translate(-50%)",
    zIndex: 999,
    cursor: "pointer",
    opacity: 0.7,
    textAlign: "center",
    backgroundColor: "none",
    "&:hover": {
      opacity: 1,
      animation: "wiggle 1s ease",
      animationIterationCount: 1,
    },
  },
  scrollToTopIconContainerMobile: {
    // height: "calc(100vh - 116px)",
    position: "fixed",
    top: 120,
    left: "50%",
    transform: "translate(-50%)",
    zIndex: 999,
    cursor: "pointer",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#228B6E",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
    borderRadius: 15,
    width: 100,
    textAlign: "center",
  },
});

const ScrollingWrapper = ({ children, refresh, isMobile }) => {
  const classes = useStyles();
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollingWrapper = useRef(null);

  useEffect(() => {
    scrollToTop();
  }, [refresh]);

  const scrollToTop = () => {
    scrollingWrapper.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onScroll = (e) => {
    if (e.target.scrollTop > 200 && !hasScrolled) {
      setHasScrolled(true);
    } else if (e.target.scrollTop < 200 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  console.log(scrollingWrapper);
  return (
    <>
      {hasScrolled && (
        <Box
          className={classes.scrollToTopIconContainer}
          onClick={() => scrollToTop()}
        >
          <Box mt={1} p={1} className={classes.button}>
            Back to top
          </Box>
        </Box>
      )}
      <Box
        onScroll={onScroll}
        className={classes.scrollingWrapperContainer}
        ref={scrollingWrapper}
      >
        {children}
      </Box>
    </>
  );
};

ScrollingWrapper.propTypes = {
  children: PropTypes.object,
  refresh: PropTypes.bool,
  isMobile: PropTypes.bool,
};

ScrollingWrapper.defaultProps = {
  children: null,
  refresh: false,
  isMobile: false,
};

export default ScrollingWrapper;
