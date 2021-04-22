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
    position: "absolute",
    top: 8,
    left: "50%",
    // transform: "translate(-50%, -50%)",
    marginLeft: -50,
    zIndex: 2,
    cursor: "pointer",
    opacity: 0.4,
    textAlign: "center",
    "&:hover": {
      opacity: 1,
      animation: "wiggle 1s ease",
      animationIterationCount: 1,
    },
    // "@keyframes wiggle": {
    //   "20%": {
    //     transform: "translateY(6)",
    //   },
    //   "40%": {
    //     transform: "translateY(-6)",
    //   },
    //   "60%": {
    //     transform: "translateY(4)",
    //   },
    //   "80%": {
    //     transform: "translateY(-2)",
    //   },
    //   "100%": {
    //     transform: "translateY(0)",
    //   },
    // },
  },
  button: {
    backgroundColor: "#228B6E",
    "&:hover": {
      backgroundColor: "#228b8b",
    },
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
    borderRadius: 15,
    width: 100,
  },
});

const ScrollingWrapper = ({children, refresh}) => {
  const classes = useStyles();
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollingWrapper = useRef(null);

  useEffect(() => {
    // if (refresh) {
      console.log(refresh);
      scrollToTop();
    // }
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

  return (
    <>
      {hasScrolled && (
        <div
          className={classes.scrollToTopIconContainer}
          onClick={() => scrollToTop()}
        >
          <Box m={1} p={1} className={classes.button}>
            Back to top
          </Box>
        </div>
      )}
      <div
        onScroll={onScroll}
        className={classes.scrollingWrapperContainer}
        ref={scrollingWrapper}
      >
        {children}
      </div>
    </>
  );
};

ScrollingWrapper.propTypes = {
  children: PropTypes.object,
  refresh: PropTypes.bool,
};

ScrollingWrapper.defaultProps = {
  children: null,
  refresh: false,
};

export default ScrollingWrapper;
