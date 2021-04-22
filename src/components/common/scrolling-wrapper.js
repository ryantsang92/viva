/*
  Scroll to top wrapper component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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
    top: 5,
    left: "50%",
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
    background: "black",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
    borderRadius: 15,
    width: 100,
  },
});

class ScrollingWrapper extends React.Component {
  state = { hasScrolled: false };

  componentDidMount() {
    this.scrollingWrapper.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 100 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true });
    } else if (
      this.scrollingWrapper.scrollTop < 100 &&
      this.state.hasScrolled
    ) {
      this.setState({ hasScrolled: false });
    }
  };

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0;
  };

  reference = (id) => (ref) => {
    this[id] = ref;
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        {this.state.hasScrolled && (
          <div
            className={classes.scrollToTopIconContainer}
            onClick={this.scrollToTop}
          >
            <Box m={1} p={1} className={classes.button}>Back to top</Box>
          </div>
        )}
        <div
          className={classes.scrollingWrapperContainer}
          ref={this.reference("scrollingWrapper")}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ScrollingWrapper);

const ScrollToTopIconContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -50px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
  text-align: center;
  &:hover {
    opacity: 1;
    animation: wiggle 1s ease;
    animation-iteration-count: 1;
  }
  @keyframes wiggle {
    20% {
      transform: translateY(6px);
    }
    40% {
      transform: translateY(-6px);
    }
    60% {
      transform: translateY(4px);
    }
    80% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
