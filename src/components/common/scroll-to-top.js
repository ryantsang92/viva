import React, { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./Styles";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core/styles";

// to-do: find a better way to style this
const useStyles = makeStyles({
  button: {
    position: "fixed",
    width: "100%",
    // left: "50%",
    bottom: 40,
    height: 20,
    fontSize: "3rem",
    zIndex: 4,
    cursor: "pointer",
    color: "green",
  },
});

const ScrollToTop = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
      console.log(scrolled);
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  console.log(visible);
  return (
    <IconButton onClick={scrollToTop} size="small" className={classes.button}>
      <ArrowUpwardIcon style={{ display: visible ? "inline" : "none" }} />
    </IconButton>
  );
};

export default ScrollToTop;
